var defaultState = {
  errorMsg: null
}

function errors(state=defaultState, action){
  switch (action.type){
    case('DATA_READY'):
      return {
        ...state,
        errorMsg: null
      }
    case('UNSUCCESSFUL_FETCH'):
      return {
        ...state,
        errorMsg: action.data.msg
      }
    case('SUCCESSFUL_FETCH'):
      return {
        ...state,
        errorMsg: null
    }
    default:
      return state;
  }
}

export default errors;