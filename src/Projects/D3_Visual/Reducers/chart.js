var defaultState = {
  year: null,
  leadingCause: null,
  sex: null,
  ethnicity: null,
  deaths: null,
  deathRate: null,
  ageAdjustedRate: null,
  displayType: null,
  loading: true
}

function chart(state=defaultState, action){
  switch(action.type){
    case('FETCH_DATA'):
      return {
        ...state,
      }
    case('SUCCESSFUL_FETCH'):
      return {
        ...state,
        year: action.year,
        leadingCause: action.leadingCause,
        sex: action.sex,
        ethnicity: action.ethnicity,
        deaths: action.deaths,
        deathRate: action.deathRate,
        ageAdjustedRate: action.ageAdjustedRate,
        loading: action.loading
      }
    case('UNSUCCESSFUL_FETCH'):
      return {
        ...state
      }
    default:
      return state;
  }
}

export default chart;