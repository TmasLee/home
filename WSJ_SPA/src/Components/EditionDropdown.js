import React from 'react';

// import {DowJones, NewsCorp} from '../NavBarTypes';

const EditionDropdown = () => {
  return (
    <div className='edition_dropdown'>
      <a href='' className='link'>
        Edition
      <span className="down-caret"></span>
      </a>
      <div className='edition_dropdown-content'>
        <div className='content'>
          <a href='' className='link'>
            Catstreet Journal
          </a>
        </div>
      </div>
    </div>
  );
}

export default EditionDropdown;