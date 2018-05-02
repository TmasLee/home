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
  // Object with props that are objects every unique year in data.
  // Every unique year object has props of leading cause of death which has an array of data
  let deathsByYear = {}; 
  // All unique years needed for year buttons.
  let yearsBtnArr = [];
  // All causes of deaths, tracks total (and other details??) over all years. 
  let leadingCauses = {};

  //  Add props to deathsByYear based on unique years in data. 
  for (var i=0; i<data.length; i++){
    // Very first prop and data value added
    if (deathsByYear.length === 0){
      deathsByYear[`${data[i]['year']}`] = {};
      deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`] = [];
      deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`].push(data[i]);

      yearsBtnArr.push(data[i]['year']);

      leadingCauses[`${data[i]['leading_cause']}`] = {};
    } 
    // Else check if year exists --> check if leading_cause is a prop of the year
    // If year exists in deathsByYear, add leading cause to that year
    // Else create new year prop --> add leading cause prop and add death. 
    else {
      if (data[i]['year'] in deathsByYear){
        if (data[i]['leading_cause'] in deathsByYear[`${data[i]['year']}`]){
          deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`].push(data[i]);
        } else {
          deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`] = [];
          deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`].push(data[i]);

          leadingCauses[`${data[i]['leading_cause']}`] = {};
          leadingCauses[`${data[i]['leading_cause']}`]['total'] = 0;
          leadingCauses[`${data[i]['leading_cause']}`]['name'] = '';
        }
      } else {
        deathsByYear[`${data[i]['year']}`] = {};
        deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`] = [];
        deathsByYear[`${data[i]['year']}`][`${data[i]['leading_cause']}`].push(data[i]);

        yearsBtnArr.push(data[i]['year']);
      }
    }
  }
  // Add a total button 
  yearsBtnArr.push('Total');
  
  console.log(deathsByYear);
  console.log(leadingCauses);

  dispatch({
    type: 'PARSE_COMPLETE',
    deathsByYear: deathsByYear,
    yearsBtnArr: yearsBtnArr,
    leadingCauses: leadingCauses
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

export function unmount(){
  return {
    type: 'UNMOUNT'
  }
}

export function changeCurrentYear(newYearData){
  return {
    type: 'CHANGE_CURRENT_YEAR',
    currentYearData: newYearData
  }
}