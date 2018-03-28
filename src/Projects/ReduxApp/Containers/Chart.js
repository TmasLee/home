import React, {Component} from 'react';
import {connect} from 'react-redux';

import LineGraph from './LineGraph';
import ChartTypeBtn from './ChartTypeBtn';
import * as actions from '../Actions/actions';

const styles = {
  width : 500,
  height : 300,
  padding : 30
}

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      title: null,
      years: null,
      anomalies: null,
      display: null,
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchTempData());
    this.setState({
      data: this.props.avgTempData,
    });
  }

  handleOnClick(type){
    this.parseData();
    this.setState({
      display: type
    });
  }

  handleDropDownClick(){
    this.setState({

    })
  }

  parseData(){
    var chartData = this.state.data,
        state = chartData['chart']['data'];
    
    // Object.keys(state['data']).forEach(function(key){
    //   var yearString = key.toString();
    //   var year = parseInt(yearString.substring(0,4));
    //   years.push(year);
    // });

    // Object.values(state['data']).forEach(function(prop){
    //   values.push(prop['value']);
    //   anomalies.push(prop['anomaly']);
    // });

    this.setState({
      title: state['description']['title'],
      // years: ,
      // values: ,
      // anomalies: 
    });
  }

  render(){
    var display;
    var title;
    
    if (this.state.data){
      title = this.state.data['description']['title'];
    }

    if (this.state.display === 'Bar Graph'){
      // display = 
    } else if (this.state.display === 'Line Graph'){
      display = <LineGraph  data={this.state.data} styles={styles}/>
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
        <div>
          <p>{title}</p>
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