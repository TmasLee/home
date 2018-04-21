import React, {Component} from 'react';
import {connect} from 'react-redux';

import PieChart from './Pie/PieChart';
import ChartBtn from '../../ReduxApp/Containers/ChartTypeBtn';
import YearBtn from './YearBtn';
import * as actions from '../Actions/actions';

const styles = {
  width: 600,
  height: 600,
  padding: 50,

};
// const CURRENT_YEAR_DISPLAY = 


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.display = null;
    this.currentYearDisplay = 'Total';
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
    this.props.dispatch(actions.changeDisplay(type));
  }

  handleYearClick(year){
    if (year==='Total'){
      let numberOfDeathsPerYear = [];

      this.props.deathsByYear.forEach((deathsInYear)=>{
        numberOfDeathsPerYear.push(deathsInYear.length);
      });

      this.data = numberOfDeathsPerYear;

    } else {
      // Figure out what im trying to graph. 
      // Graph yearly stats --> but figure out how to update data to
      //  graph selected slice (aka races/gender of death cause) 
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
          <div className='btn-group-sm' role='group' >
            {this.props.yearsBtnArr.map((year, i)=>{
              return (
                <YearBtn key={i} year={year} onClick={this.handleYearClick}/>
              )
            })}
            <YearBtn year='Total' onClick={this.handleYearClick}/>
          </div>
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
    displayType: state.chart.displayType,
    loading: state.chart.loading,
    errorMsg: state.errors.errorMsg,
  }
})(Chart);

// Multipurpose component button
// Button on click value processing 