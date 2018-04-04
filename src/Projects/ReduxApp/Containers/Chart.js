import React, {Component} from 'react';
import {connect} from 'react-redux';

import LineGraph from './LineGraph';
import ChartTypeBtn from './ChartTypeBtn';
import * as actions from '../Actions/actions';

const styles = {
  width : 550,
  height : 300,
  padding : 20
}

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: null
    }
    this.display = null;
    this.data = null;
    this.title = null;
    this.units = null;
    this.years = null;
    this.values = null;
    this.coords = null;

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){    
    this.props.dispatch(actions.fetchRainFallData());
    this.props.dispatch(actions.fetchTempData());
}

  componentWillReceiveProps(nextProps){
    if (nextProps.avgRainFallData && nextProps.avgTempData){
      this.props.dispatch(actions.dataReady());
    }
  }

  handleOnClick(type){
    this.data = (type === 'Average Temp') ? this.props.avgTempData 
                                          : this.props.avgRainFallData;
   
    const parsedData = this.parseData(),
          years = parsedData[0],
          values = parsedData[1],
          title = parsedData[2],
          units = parsedData[3];

    this.units = units;
    this.title = title.concat(`, Years vs. ${this.units}`);
    this.years = years;
    this.values = values;
    this.coords = this.generateCoords();

    this.setState({
      display: type
    });
  }

  parseData(){
    let chartData = this.data,
        displayData = chartData['data'],
        years = [],
        values = [],
        title = chartData['description']['title'],
        units = chartData['description']['units'];
    
    Object.keys(displayData).forEach((key) =>{
      var yearString = key.toString();
      var year = parseInt(yearString.substring(0,4), 10);
      years.push(year);
    });
    Object.values(displayData).forEach((prop) =>{
      values.push(prop['value']);
    });

    return [years, values, title, units];
  }

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
    if (!this.state.display){
      this.display = null;
    } else {
    this.display = <LineGraph coordinates={this.coords} units={this.units} styles={styles}/>
    }

    if (this.props.loading === true){
      return (<p>Loading...</p>);
    } else if (this.props.loading === false){
      return(
        <div>
          {this.props.errorMsg}
          <br/>
          <div className='btn-group-sm' role='group' >
            <ChartTypeBtn type='Average Rainfall' onClick={this.handleOnClick}/>
            <ChartTypeBtn type='Average Temp' onClick={this.handleOnClick}/>
          </div>
          <br/>
          <p className='h4'>{this.title}</p>
          <br/><br/>
          {this.display}
        </div>
        )
      }
    }
  }

// Updates this component
export default connect((state, props) => {
  return {
    avgTempUrl: state.chart.avgTempUrl,
    avgTempData: state.chart.avgTempData,
    avgRainFallUrl: state.chart.avgRainFallUrl,
    avgRainFallData: state.chart.avgRainFallData,
    loading: state.chart.loading,
    errorMsg: state.errors.errorMsg,
  }
})(Chart);