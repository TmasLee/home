import {combineReducers} from 'redux';
import errors from './errors';
import chart from './chart';

export default combineReducers({
  errors: errors,
  chart: chart,
});