var defaultState = {
  avgTempUrl: null,
  avgTempData: null,
  avgRainFallUrl: null,
  avgRainFallData: null,
  loading: true
}

function chart(state=defaultState, action){
  switch (action.type){
    case('FETCH_TEMPERATURE_DATA'):
      return {
        ...state,
        avgTempUrl: action.avgTempUrl,
      }

    case('FETCH_RAINFALL_DATA'):
      return {
        ...state,
        avgRainFallUrl: action.avgRainFallUrl,
      }

    case('RECEIVE_TEMPERATURE_DATA'):
      return {
        ...state,
        avgTempData: action.data
      }

    case('RECEIVE_RAINFALL_DATA'):
      return {
        ...state,
        avgRainFallData: action.data
      }
    case('DATA_READY'):
      return {
        ...state,
        loading: false
      }

    default:
      return state;  
  }
}

export default chart;