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
        let year=[],
            leadingCause=[],
            sex=[],
            ethnicity=[],
            deaths=[],
            deathRate=[],
            ageAdjustedRate=[];
        Object.keys(response).forEach((key)=>{
          year.push(key['year']);
          leadingCause.push(key['leading_cause']);
          sex.push(key['sex']);
          ethnicity.push(key['race_ethnicity']);
          deaths.push(key['deaths']);
          deathRate.push(key['death_rate']);
          ageAdjustedRate.push(key['age_adjusted_death_rate']);
        });
        dispatch({
          type: 'SUCCESSFUL_FETCH',
          year: year,
          leadingCause: leadingCause,
          sex: sex,
          ethnicity: ethnicity,
          deaths: deaths,
          deathRate: deathRate,
          ageAdjustedRate: ageAdjustedRate,
          loading: false
        });
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
