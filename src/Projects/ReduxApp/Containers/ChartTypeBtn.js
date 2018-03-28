import React from 'react';

const ChartTypeBtn = ({type, onClick}) => {
  return (
    <button type='button'
            className='btn btn-secondary' 
            onClick={(e) => {
              e.preventDefault();
              onClick(type);
              }}>
      {type}
    </button>
  )
}

export default ChartTypeBtn;