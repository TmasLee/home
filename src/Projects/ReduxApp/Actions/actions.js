

export function fetchData(){
  return (dispatch) => {
    _fetchData(dispatch);
  }
}

function _fetchData(dispatch){
  fetch('https://data.cdc.gov/api/views/bi63-dtpu', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
  .then(response => {
    console.log(response);
    dispatch({
      type: 'FETCH_DATA',
      data: response
    })
  })
}