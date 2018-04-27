import React, {Component} from 'react';
import {connect} from 'react-redux';

import PieChart from './Pie/PieChart';
import ChartBtn from '../../ReduxApp/Containers/ChartTypeBtn';
import YearBtn from './YearBtn';
import * as actions from '../Actions/actions';

const styles = {
  width: 800,
  height: 800,
  padding: 50,

};

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.data = null;
    this.display = null;
    this.currentYear = null;
    this.yearBtnGroup = null;
    this.yearsBtnArr = this.props.yearsBtnArr;
    this.loading = this.props.loading;
    this.title = 'NYC Leading Causes of Death';

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleYearClick = this.handleYearClick.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchData());
  }
  
  componentWillReceiveProps(nextProps){
    if (nextProps.rawData !== this.props.rawData){
      this.props.dispatch(actions.parseData(nextProps.rawData));
      
    }
    if (nextProps.loading===false){
      this.loading = nextProps.loading;
    } 
    if (nextProps.displayType === 'Bar'){

    }else if (nextProps.displayType === 'Pie'){
      this.display = <PieChart {...styles} data={this.data}/>
    }
  }

  handleOnClick(type){
    let leadingCausesDeathTotal = this.props.leadingCauses;
    let deathsByYear = this.props.deathsByYear;

    this.currentYear = 'Total';

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
    console.log(leadingCausesDeathTotal);
    this.data = Object.values(leadingCausesDeathTotal);
    console.log(this.data);

    this.yearBtnGroup = (
      <div className='btn-group-sm' role='group' >
        {this.props.yearsBtnArr.map((year, i)=>{
          return (
            <YearBtn key={i} year={year} onClick={this.handleYearClick}/>
          )
        })}
        <YearBtn year='Total' onClick={this.handleYearClick}/>
      </div>
    )

    this.props.dispatch(actions.changeDisplay(type));
  }

  handleYearClick(year){
    if (year==='Total'){
      let numberOfDeathsPerYear = [];

      Object.keys(this.props.deathsByYear).forEach((deathsInYear)=>{
        numberOfDeathsPerYear.push(deathsInYear);
      });

      this.data = numberOfDeathsPerYear;

    } else {

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
          <div className='btn-group-sm' role='group' >
            <ChartBtn type='Bar' onClick={this.handleOnClick}/>
            <ChartBtn type='Pie' onClick={this.handleOnClick}/>
          </div>
          <br/>
          {this.yearBtnGroup}
          <br/><br/>
          {this.display}
        </div>
      )
    }
  }
}

export default connect((state, props) => {
  return {
    rawData: state.chart.rawData,
    deathsByYear: state.chart.deathsByYear,
    yearsBtnArr: state.chart.yearsBtnArr,
    leadingCauses: state.chart.leadingCauses,
    displayType: state.chart.displayType,
    loading: state.chart.loading,
    errorMsg: state.errors.errorMsg,
  }
})(Chart);

// Clean up code, make more readable and logical
// Multipurpose component button
// Button on click value processing 

// Save values in cache so dont gotta do same calculations again
