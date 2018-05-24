import React from 'react';

import {DowJones, NewsCorp} from '../NavBarTypes';

const DjDropdown = () => {
  return (
    <div className='dj_dropdown'>
      <a href='' className='link'>
        DOW JONES, A NEWS CORP COMPANY
        <span className="down-caret"></span>
      </a>
      <div className='dropdown-content'>
        <div className='about_newscorp'>
          News Corp is a network of leading companies in the worlds
          of diversified media, news, education, and information services.
        </div>
        <div className='company_columns'>
          <div>
            <h6 className='company'>Dow Jones</h6>
            <ul className='dj_columns'>
              {DowJones.map((company)=> {
                return (
                  <li key={company.child}>
                    <a href={`${company.link}`} className='link'>
                      {`${company.child}`}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h6 className='company'>News Corp</h6>
            <ul className='newscorp_columns'>
              {NewsCorp.map((company)=> {
                return (
                  <li key={company.child}>
                    <a href={`${company.link}`} className='link'>
                      {`${company.child}`}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DjDropdown;