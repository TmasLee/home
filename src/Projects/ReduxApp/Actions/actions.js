var temp_url = 'https://www.ncdc.noaa.gov/cag/national/time-series/110-tavg-ytd-12-1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000';
var rainfall_url = 'https://www.ncdc.noaa.gov/cag/national/time-series/110-pcp-ytd-12-1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000';

export function fetchTempData(){
  return (dispatch) => {
    // return _fetchTempData(dispatch)
    return dispatch(_fetchTempData(dispatch))
  }
}

function _fetchTempData(dispatch){
  return dispatch => { 
    dispatch({
      type: 'FETCH_TEMPERATURE_DATA',
      avgTempUrl: temp_url
    });
    return fetch(temp_url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(response => {
      dispatch(receiveData(temp_url, response));
    });
  }
}

export function fetchRainFallData(){
  return (dispatch) => {
    _fetchRainFallData(dispatch)
  }
}

function _fetchRainFallData(dispatch){
  dispatch({
    type: 'FETCH_RAINFALL_DATA',
    avgRainFallUrl: rainfall_url
  });
  return fetch(rainfall_url, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(response => {
    dispatch(receiveData(rainfall_url, response));
  })
}

export function receiveData(url,json){
  if (url === temp_url){
  return {
    type: 'RECEIVE_TEMPERATURE_DATA',
    data: json
  }
} else {
    return {
      type: 'RECEIVE_RAINFALL_DATA',
      data: json
    }
  }
}

export function dataNotReady(){
  return dispatch({
    type: 'DATA_NOT_READY'
  })
}