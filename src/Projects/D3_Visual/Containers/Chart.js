import React, {Component} from 'react';
import {connect} from 'react-redux';

import LineGraph from './Line/LineGraph';
import PieChart from './Pie/PieChart';
import ChartBtn from '../../ReduxApp/Containers/ChartTypeBtn';
import * as actions from '../Actions/actions';

const styles = {
  width: 600,
  height: 600,
  padding: 50,

}

const sampleData = [50,30,60,40];

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.display = null;
    this.loading = this.props.loading;
    this.title = 'NYC Leading Causes of Death';
    this.xData = [];
    this.yData = [];

    this.handleOnClick = this.handleOnClick.bind(this);
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
    if (nextProps.displayType === 'Line'){
      this.display = <LineGraph {...styles} xData={this.xData} yData={this.yData}/>
    } else if (nextProps.displayType === 'Bar'){

    }else if (nextProps.displayType === 'Pie'){
      this.display = <PieChart {...styles} data={sampleData}/>
    }
  }

  handleOnClick(type){
    this.props.dispatch(actions.changeDisplay(type));
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
            <ChartBtn type='Line' onClick={this.handleOnClick}/>
            <ChartBtn type='Bar' onClick={this.handleOnClick}/>
            <ChartBtn type='Pie' onClick={this.handleOnClick}/>
          </div>
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
    fetchDone: state.chart.fetchDone,
    year: state.chart.year,
    leadingCause: state.chart.leadingCause,
    sex: state.chart.sex,
    ethnicity: state.chart.ethnicity,
    deaths: state.chart.deaths,
    deathRate: state.chart.deathRate,
    ageAdjustedRate: state.chart.ageAdjustedRate,
    displayType: state.chart.displayType,
    loading: state.chart.loading,
    errorMsg: state.errors.errorMsg,
  }
})(Chart);