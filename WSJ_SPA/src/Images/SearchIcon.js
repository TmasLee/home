import React from 'react';

const SearchIcon = ({onClick}) => {
  return (
    <a href='' className='search_btn'>
      <svg height="19" width="19" onClick={onClick}>
        <circle cx="9" cy="9" r="7"
                strokeWidth='3' stroke='black'fill='white'/>
        <line x1='20'  y1='20' x2='13' y2='13'
              stroke='black' strokeWidth='3'/>
      </svg>
    </a>
  );
}

export default SearchIcon;