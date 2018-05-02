import React from 'react';

const YearBtn = ({year, onClick}) => {
  return (
    <button type='button'
            className='btn btn-primary' 
            onClick={(e) => {
              e.preventDefault();
              onClick(year);
              }}>
      {year}
    </button>
  )
}

export default YearBtn;