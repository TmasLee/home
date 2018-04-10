var defaultState = {
  errorMsg: ''
}

function errors(state=defaultState, action){
  switch(action.type){
    case('SUCCESSFUL_FETCH'):
      return {
        ...state,
        errorMsg: ''
      }
    case('UNSUCCESSFUL_FETCH'):
      return {
        ...state,
        errorMsg: action.errorMsg.msg
      }
    default:
      return state;
  }
}

export default errors;