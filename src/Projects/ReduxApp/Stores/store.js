import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';
// import {fetchRainFallData, fetchTempData} from '../Actions/actions';

var logger = createLogger({
  collapsed: true
});

var store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

// store.dispatch(fetchTempData());
// store.dispatch(fetchRainFallData());

export default store;