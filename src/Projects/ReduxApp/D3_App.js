import React from 'react';
import {Provider} from 'react-redux';
import Chart from './Containers/Chart';
import store from './Stores/store';

const D3_App = () => {
  return (
    <div>
      <Provider store={store}><Chart/></Provider>
    </div>
  )
}

export default D3_App;