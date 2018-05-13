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

    this.data = null;
    this.display = null;
    this.yearBtnGroup = null;
    this.loading = this.props.loading;
    this.title = 'NYC Leading Causes of Death from 2007-2014';

  }

  componentDidMount(){
    if (localStorage.getItem('totalDataObj')){
      this.data = JSON.parse(localStorage.getItem('totalDataObj'));
    }
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

  componentWillUnmount(){
    this.props.dispatch(actions.unmount());
  }

  handleOnClick = (type) => {
    if (localStorage.getItem('totalDataObj')){
      this.data = JSON.parse(localStorage.getItem('totalDataObj'));
      this.props.dispatch(actions.changeCurrentYear(this.data));
      this.display = <PieChart {...styles} data={this.data}/>
    } else {
      let leadingCausesDeathTotal = this.props.leadingCauses;
      let deathsByYear = this.props.deathsByYear;
      this.props.dispatch(actions.cacheTotalData(leadingCausesDeathTotal, deathsByYear));
      this.data = this.props.currentYearData;
    }

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
  }

  handleYearClick = (year) => {
    if (year==='Total'){
      let retrievedTotalDataObj = JSON.parse(localStorage.getItem('totalDataObj'));
      this.data = retrievedTotalDataObj;
    } else if (localStorage.getItem(`year${year}Data`)){
      this.data = JSON.parse(localStorage.getItem(`year${year}Data`));
    } else {
      let leadingCausesDeathTotal = this.props.leadingCauses;
      let deathsByYear = this.props.deathsByYear;
      this.props.dispatch(actions.cacheNewData(year, leadingCausesDeathTotal, deathsByYear));
      this.data = this.props.currentYearData;
      }
    this.props.dispatch(actions.changeCurrentYear(this.data));
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