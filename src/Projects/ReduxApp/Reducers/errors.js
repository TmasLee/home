var defaultState = {
  errorMsg: ''
}

function errors(state=defaultState, action){
  switch (action.type){
    case('UNSUCCESSFUL_FETCH'):
    return {
      ...state,
      errorMsg: action.data.msg
    }
  case('SUCCESSFUL_FETCH'):
    return {
      ...state,
      errorMsg: action.data.msg
    }
  default:
    return state;
  }
}

export default errors;