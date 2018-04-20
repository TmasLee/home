import React, {Component} from 'react';
import {connect} from 'react-redux';

import PieChart from './Pie/PieChart';
import ChartBtn from '../../ReduxApp/Containers/ChartTypeBtn';
import * as actions from '../Actions/actions';

const styles = {
  width: 600,
  height: 600,
  padding: 50,

}

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {};

    this.display = null;
    this.loading = this.props.loading;
    this.title = 'NYC Leading Causes of Death';

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
    if (nextProps.displayType === 'Bar'){

    }else if (nextProps.displayType === 'Pie'){
      this.display = <PieChart {...styles} data={this.props.deathsByYear}/>
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
            <ChartBtn type='Bar' onClick={this.handleOnClick}/>
            <ChartBtn type='Pie' onClick={this.handleOnClick}/>
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
    rawData: state.chart.rawData,
    deathsByYear: state.chart.deathsByYear,
    displayType: state.chart.displayType,
    loading: state.chart.loading,
    errorMsg: state.errors.errorMsg,
  }
})(Chart);