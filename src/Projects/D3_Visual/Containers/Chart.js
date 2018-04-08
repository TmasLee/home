import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Actions/actions';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return (
      <div></div>
    )
  }

}

export default connect((state, props) => {
  return {
    errorMsg: state.errors.errorMsg,
  }
})(Chart);