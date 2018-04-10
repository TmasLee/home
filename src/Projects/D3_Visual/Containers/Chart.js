import React, {Component} from 'react';
import {connect} from 'react-redux';

import ChartBtn from '../../ReduxApp/Containers/ChartTypeBtn';
import * as actions from '../Actions/actions';

const styles = {

}

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: null
    }
    this.loading = this.props.loading;
    this.title = 'NYC Leading Causes of Death';

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchData());
  }
  
  componentWillReceiveProps(nextProps){
    if (nextProps.loading===false){
      this.loading = false;
    }
  }

  handleOnClick(type){

  }

  render(){
    let display;
    if (this.loading === true){
      return (<p>Loading...</p>);
    } else {
      return (
        <div>
          <p className='h4'>{this.title}</p>
          <br/>
          {this.props.errorMsg}
          <br/>
          <div className='btn-group-sm' role='group' >
            <ChartBtn type='Line' onClick={this.handleOnClick}/>
            <ChartBtn type='Bar' onClick={this.handleOnClick}/>
            <ChartBtn type='Comparative Line?' onClick={this.handleOnClick}/>
            <ChartBtn type='Place Holder' onClick={this.handleOnClick}/>
          </div>
          <br/><br/>
          {this.display}
        </div>
      )
    }
  }
}

export default connect((state, props) => {
  return {
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