import React from 'react';
import {Provider} from 'react-redux';

import Main from './Main';
import store from './Stores/store';
import './App.css';

const App = () => {
  return (
    <div>
      <Provider store={store}><Main/></Provider>
    </div>
  )
}

export default App;