import React from 'react';

const HeaderLine = ({windowWidth}) => {
  return (
    <div className='header_line'>
      <svg height='5' width={19*windowWidth/20}>      
        <line x1='2'  y1='0' x2={windowWidth} y2='0'
              stroke='black' strokeWidth='5'/>
      </svg>
    </div>
  )
}

export default HeaderLine;