import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Actions/actions';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.dispatch(actions.fetchData())
  }

  render(){
    return(
      <div>
        <p>{null}</p>
      </div>
    )
  }

}

export default connect((state, props) => {
  return {
    json: state.chart.json
  }
})(Chart);