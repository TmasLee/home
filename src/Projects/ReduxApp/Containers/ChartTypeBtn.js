import React from 'react';

const ChartTypeBtn = ({type, onClick}) => {
  return (
    <button type='button'
            className='btn btn-primary'
            data-toggle='button'
            onClick={(e) => {
              e.preventDefault();
              onClick(type);
              }}>
      {type}
    </button>
  )
}

export default ChartTypeBtn;