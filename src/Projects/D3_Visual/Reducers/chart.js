var defaultState = {
  rawData: null,
  currentYearData: null,
  deathsByYear: null,
  yearsBtnArr: null,
  leadingCauses: null,
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
        deathsByYear: action.deathsByYear,
        yearsBtnArr: action.yearsBtnArr,
        leadingCauses: action.leadingCauses
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
    case 'UNMOUNT':
      return {
        ...state,
        rawData: null,
        currentYearData: null,
        deathsByYear: null,
        yearsBtnArr: null,
        leadingCauses: null,
        displayType: null,
        loading: true
      }
    case 'CHANGE_CURRENT_YEAR':
      return {
        ...state,
        currentYearData: action.currentYearData
      }
    default:
      return state;
  }
}

export default chart;