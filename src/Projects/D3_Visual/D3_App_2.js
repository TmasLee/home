import React from 'react';
import {Provider} from 'react-redux';
import store from './Stores/store';
import Chart from './Containers/Chart';

const D3_App_2 = () => {
  return (
    <div>
      <Provider store={store}><Chart/></Provider>
    </div>
  )
}

export default D3_App_2;