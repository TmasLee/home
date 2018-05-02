import React, {Component} from 'react';
import {connect} from 'react-redux';

import PieChart from './Pie/PieChart';
import ChartBtn from '../../ReduxApp/Containers/ChartTypeBtn';
import YearBtn from './YearBtn';
import * as actions from '../Actions/actions';

const styles = {
  width: 900,
  height: 700,
  padding: 50,
};

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };

    this.data = null;
    this.display = null;
    this.yearBtnGroup = null;
    this.loading = this.props.loading;
    this.title = 'NYC Leading Causes of Death from 2007-2014';

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleYearClick = this.handleYearClick.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchData());
  }
  
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if (nextProps.rawData !== this.props.rawData){
      this.props.dispatch(actions.parseData(nextProps.rawData));
    }
    if (nextProps.currentYearData !== this.props.currentYearData){
      this.setState({data: nextProps.data})
    }
    if (nextProps.loading===false){
      this.loading = nextProps.loading;
    } 
    if (nextProps.displayType === 'Bar'){

    }else if (nextProps.displayType === 'Pie'){
      this.display = <PieChart {...styles} data={this.data}/>
    }
  }

  componentWillUnmount(){
    this.props.dispatch(actions.unmount());
  }

  handleOnClick(type){
    let leadingCausesDeathTotal = this.props.leadingCauses;
    let deathsByYear = this.props.deathsByYear;

    // if (localStorage.getItem('totalDataObj')){
    //   this.data = JSON.parse(localStorage.getItem('totalDataObj'));
    //   this.props.dispatch(actions.changeCurrentYear(this.data));
    // } else {
      for (var year in deathsByYear){
        for (var cause in leadingCausesDeathTotal){
          leadingCausesDeathTotal[cause]['name'] = cause; 
          for (var index in deathsByYear[`${year}`][`${cause}`]){
            let deaths = parseInt(deathsByYear[`${year}`][`${cause}`][`${index}`]['deaths'], 10);
            // Check if deathsByYear[`${year}`][`${cause}`][`${index}`]['deaths'] is a number bc there are some '.'
            if (Number.isInteger(deaths)){
              //Parse string to integer and add to total
              leadingCausesDeathTotal[cause]['total'] += deaths;
            }
          }
        }
      }
      this.data = Object.values(leadingCausesDeathTotal);
      this.props.dispatch(actions.changeCurrentYear(this.data));
      // Store in cache
      localStorage.setItem('totalDataObj', JSON.stringify(this.data));

      console.log(this.data);

      this.yearBtnGroup = (
        <div className='btn-group-sm' role='group' >
          {this.props.yearsBtnArr.map((year, i)=>{
            return (
              <YearBtn key={i} year={year} onClick={this.handleYearClick}/>
            )
          })}
        </div>
      )
      this.props.dispatch(actions.changeDisplay(type));
    // }
  }

  handleYearClick(year){

    if (year==='Total'){
      let retrievedTotalDataObj = JSON.parse(localStorage.getItem('totalDataObj'));
      this.data = retrievedTotalDataObj;
      this.props.dispatch(actions.changeCurrentYear(this.data));
      console.log(this.data);

    } else {

      let leadingCausesDeathTotal = this.props.leadingCauses;
      let deathsByYear = this.props.deathsByYear;
      console.log(deathsByYear);

      for (var cause in deathsByYear[`${year}`]){
        leadingCausesDeathTotal[cause]['total'] = 0;
        // eslint-disable-next-line
        Object.values(deathsByYear[`${year}`][`${cause}`]).forEach((deathsByRace)=>{
          let deaths = parseInt(deathsByRace['deaths'], 10);
            if (Number.isInteger(deaths)){
              leadingCausesDeathTotal[cause]['total'] += deaths;
            }
          })
        }
        this.data = Object.values(leadingCausesDeathTotal);
        this.props.dispatch(actions.changeCurrentYear(this.data));

        console.log(this.data);
      }
    }

  render(){
    let error = null;

    if (this.props.errorMsg){
      error = this.props.errorMsg;
    }
    if (this.loading === true){
      return (<p>Loading...</p>);
    } else {
      return (
        <div>
          <p className='h4'>{this.title}</p>
          <br/>
          {error}
          <div className='btn-group-sm' role='group'>
            <ChartBtn type='Bar' onClick={this.handleOnClick}/>
            <ChartBtn type='Pie' onClick={this.handleOnClick}/>
          </div>
          {this.yearBtnGroup}
          <br/>
          {this.display}
        </div>
      )
    }
  }
}

export default connect((state, props) => {
  return {
    rawData: state.chart.rawData,
    currentYearData: state.chart.currentYearData,
    deathsByYear: state.chart.deathsByYear,
    yearsBtnArr: state.chart.yearsBtnArr,
    leadingCauses: state.chart.leadingCauses,
    displayType: state.chart.displayType,
    loading: state.chart.loading,
    errorMsg: state.errors.errorMsg,
  }
})(Chart);