var defaultState = {
  json: '',
}

function chart(state=defaultState, action){
  switch (action.type){
    case('FETCH_DATA'):
      return {
        ...state,
        json: action.data
      }

    default:
      return state;  
  }
}

export default chart;