import React from 'react';
import {Provider} from 'react-redux';
import store from './Stores/store';
import Chart from './Containers/Chart';

const Main = () => {
  return (
    <div>
      <Provider store={store}><Chart/></Provider>
    </div>
  )
}

export default Main;