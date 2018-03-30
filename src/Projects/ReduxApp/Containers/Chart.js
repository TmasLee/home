import React, {Component} from 'react';
import {connect} from 'react-redux';

import LineGraph from './LineGraph';
import ChartTypeBtn from './ChartTypeBtn';
import * as actions from '../Actions/actions';

const styles = {
  width : 300,
  height : 300,
  padding : 10
}

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      display : null
    }

    this.data = null;
    this.title = null;
    this.years = null;
    this.values = null;
    this.anomalies = null;
    this.coords = null;

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);
  }

  componentDidMount(){
    this.data = this.props.avgTempData;
    this.title = this.data['description']['title'];
  }

  handleOnClick(type){
    const parsedData = this.parseData(),
          years = parsedData[0],
          values = parsedData[1],
          anomalies = parsedData[2];

    this.years = years;
    this.values = values;
    this.anomalies = anomalies;
    this.coords = this.generateCoords();
  
    this.setState({
      display: type
    });
  
  }

  handleDropDownClick(){
    
  }

  parseData(){
    var chartData = this.data,
        displayData = chartData['data'],
        years = [],
        values = [],
        anomalies = [];
    
    Object.keys(displayData).forEach((key) =>{
      var yearString = key.toString();
      var year = parseInt(yearString.substring(0,4), 10);
      years.push(year);
    });
    Object.values(displayData).forEach((prop) =>{
      values.push(prop['value']);
      anomalies.push(prop['anomaly']);
    });

    return [years, values, anomalies];
  }

  // Currently only creates Year vs Temp 
  generateCoords(){
    let index = 0;
    let coords = [];
    this.years.forEach((year) => {
      var coordPair = [year, parseInt(this.values[index], 10)];
      coords.push(coordPair);
      index++;
    });
    return coords;
  }

  render(){
    var display;
    // var title;
    // title = (this.data === this.props.avgTempData) ? this.props.avgTempData['description']['title']
    //                                           : this.props.avgRainFallData['description']['title'];

    if (this.state.display === 'Bar Graph'){
      // display = 
    } else if (this.state.display === 'Line Graph'){
      display = <LineGraph coordinates={this.coords} styles={styles}/>
    } else if (this.state.display === 'Map'){
      // display =
    } else {
      display = null;
    }

    return(
      <div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Data To Display
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={this.handleDropDownClick}>Annual US Average Temperature</a>
            <a className="dropdown-item" onClick={this.handleDropDownClick}>Contiguous US Annual Precipitation</a>
          </ul>
        </div>
        <br/>
        <div>
          <p>{this.title}</p>
          <div className='btn-group' role='group' >
            <ChartTypeBtn type='Bar Graph' onClick={this.handleOnClick}/>
            <ChartTypeBtn type='Line Graph' onClick={this.handleOnClick}/>
          </div>
          <br/><br/>
          {display}
        </div>
      </div>
    )
  }
}

// Updates this component
export default connect((state, props) => {
  return {
    avgTempUrl: state.chart.avgTempUrl,
    avgTempData: state.chart.avgTempData,
    avgRainFallUrl: state.chart.avgRainFallUrl,
    avgRainFallData: state.chart.avgRainFallData,
  }
})(Chart);