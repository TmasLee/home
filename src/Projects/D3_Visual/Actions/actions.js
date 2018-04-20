const url = 'https://data.cityofnewyork.us/resource/uvxr-2jwn.json';

export function fetchData(){
  return (dispatch) => {
    return dispatch(_fetchData(dispatch))
  }
}

function _fetchData(dispatch){
  return (dispatch) => {
    dispatch({
      type: 'FETCH_DATA',
    });
    return fetch(url, {method: 'GET'})
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'SUCCESSFUL_FETCH',
          rawData: response,
        })
      })
      .then(response => {
        dispatch({
          type: 'LOADING_DONE',
          loading: false,
        })
      })
      .catch(err => {
        let msg = 'Fetch unsuccessful, please reload the component!'
        dispatch({
          type: 'UNSUCCESSFUL_FETCH',
          errorMsg: {msg: msg}
        })
      });
  }
}

export function parseData(data){
  return (dispatch) => {
    dispatch({
      type: 'PARSE_DATA'
    });
    _parseData(data, dispatch);
    }
}

function _parseData(data, dispatch){
  // Object with props that are every unique year in data.
  let deathsByYear = {}; 

  //  Add props to deathsByYear based on unique years in data. 
  for (var i=0; i<data.length; i++){
    // Very first prop and data value added
    if (deathsByYear.length === 0){
      deathsByYear[`${data[i]['year']}`] = [];      
      deathsByYear[`${data[i]['year']}`].push(data[i]);
    } 
    // Else check if year exists
    // If year exists in deathsByYear, add death to that year
    // Else create new year prop and add death
    else {
      if (data[i]['year'] in deathsByYear){
        deathsByYear[`${data[i]['year']}`].push(data[i]);
      } else {
        deathsByYear[`${data[i]['year']}`] = [];
        deathsByYear[`${data[i]['year']}`].push(data[i]);
      }
    }
  }
  console.log(deathsByYear);

  dispatch({
    type: 'PARSE_COMPLETE',
    deathsByYear: deathsByYear,
  });
}

export function changeDisplay(displayType){
  return (dispatch)=> {
    dispatch({
      type: 'CHANGE_DISPLAY',
      displayType: displayType
    })
  }
}