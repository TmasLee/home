var defaultState = {
  rawData: null,
  // fetchDone: false,
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
    case 'FETCH_DATA':
      return {
        ...state,
      }
    case 'SUCCESSFUL_FETCH':
      return {
        ...state,
        rawData: action.rawData,
      }
    case 'UNSUCCESSFUL_FETCH':
      return {
        ...state
      }
    case 'PARSE_DATA':
      return {
        ...state,
      }
    case 'PARSE_COMPLETE':
      return {
        ...state,
        year: action.year,
        leadingCause: action.leadingCause,
        sex: action.sex,
        ethnicity: action.ethnicity,
        deaths: action.deaths,
        deathRate: action.deathRate,
        ageAdjustedRate: action.ageAdjustedRate,
      }
    case 'LOADING_DONE':
      return {
        ...state,
        loading: action.loading
      }
    case 'CHANGE_DISPLAY':
      return {
        ...state,
        displayType: action.displayType
      }
    default:
      return state;
  }
}

export default chart;