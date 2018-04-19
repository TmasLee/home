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
  let deathsByYear = null,
      uniqueYears = null,
      year=[];

  Object.values(data).forEach((prop)=>{
    year.push(prop['year']);
  });

  //  From var year get unique years using ES6 Set
  uniqueYears = [...new Set(year)];

  deathsByYear = seperateDeathsByYear(uniqueYears, data);

  dispatch({
    type: 'PARSE_COMPLETE',
    year: year,
  });
}

function seperateDeathsByYear(uniqueYears, rawData){
  let deathsByYear = {};

  Object.values(uniqueYears).forEach((prop)=>{
    deathsByYear[`${prop}`] = [];
    console.log(deathsByYear);
  });

  //  For each death in rawData, check which year in uniqueYears
  //  the death happened in and add it to deathsByYear.
  Object.values(rawData).forEach((prop)=>{
    let index = 0;
    while (index<uniqueYears.length){
      if (prop['year'] === uniqueYears[index]){
        // deathsByYear[`${uniqueYears[index]}`].push(prop);
        console.log(uniqueYears[index]);
      }
      index++;
    }
  });

  return deathsByYear;
}

export function changeDisplay(displayType){
  return (dispatch)=> {
    dispatch({
      type: 'CHANGE_DISPLAY',
      displayType: displayType
    })
  }
}

// export function 