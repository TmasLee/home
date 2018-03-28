import {combineReducers} from 'redux';
import errors from './errors';
import chart from './chart';
// import chartData from './chartData';

export default combineReducers({
  errors: errors,
  chart: chart,
  // chartData: chartData
});