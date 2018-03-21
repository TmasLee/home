import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './Stores/store';
import Map from './Containers/Map';

const Main = ({}) => {
  return (
    <div>
      <Provider store={store}><Map/></Provider>,
    </div>
  )
}

export default Main;