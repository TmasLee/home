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
          leadingCauses[`${data[i]['leading_cause']}`]['name'] = 'z';
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
  // console.log(deathsByYear);
  // console.log(leadingCauses);
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

export function cacheNewData(year, leadingCausesDeathTotal, deathsByYear){
  let cachedData;
  for (var cause in deathsByYear[`${year}`]){
    leadingCausesDeathTotal[cause]['total'] = 0;
    // eslint-disable-next-line
    Object.values(deathsByYear[`${year}`][`${cause}`]).forEach((deathsByRace)=>{
      let deaths = parseInt(deathsByRace['deaths'], 10);
      if (Number.isInteger(deaths)){
        leadingCausesDeathTotal[cause]['total'] += deaths;
      };
    })
    leadingCausesDeathTotal[cause]['name'] = cause;
  };
  cachedData = Object.values(leadingCausesDeathTotal);
  localStorage.setItem(`year${year}Data`, JSON.stringify(cachedData));

  return {
    type: 'CACHE_NEW_DATA',
    currentYearData: cachedData
  }
}

export function cacheTotalData(leadingCausesDeathTotal, deathsByYear){
  let cachedData;
  for (var year in deathsByYear){
    for (var cause in leadingCausesDeathTotal){
      leadingCausesDeathTotal[cause]['name'] = cause; 
      for (var index in deathsByYear[`${year}`][`${cause}`]){
        let deaths = parseInt(deathsByYear[`${year}`][`${cause}`][`${index}`]['deaths'], 10);
        // Check if deathsByYear[`${year}`][`${cause}`][`${index}`]['deaths'] is a number bc there are some '.'
        if (Number.isInteger(deaths)){
          //Parse string to integer and add to total
          leadingCausesDeathTotal[cause]['total'] += deaths;
        }
      }
    }
  }
  cachedData = Object.values(leadingCausesDeathTotal);
  localStorage.setItem('totalDataObj', JSON.stringify(this.data));

  return {
    type: 'CACHE_TOTAL_DATA',
    currentYearData: cachedData
  }
}