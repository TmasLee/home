import React from 'react';

const Divider = () => {
  return (
    <div className='divider'>
      <svg height="18" width="3">      
        <line x1='2'  y1='3' x2='2' y2='18'
              stroke='gray' strokeWidth='1'/>
      </svg>
    </div>
  )
}

export default Divider;