import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';

// import HeaderLine from '../Images/HeaderLine';
import SearchIcon from '../Images/SearchIcon';

const TopicsNavBar = ({tabs, type}) => {
  return (
    <div className={type}>
      <BrowserRouter>
        <div className='wrapper'>
          <ul className='nav justify-content-center'>
            {tabs.map((tab)=> {
              return (
                <li key={tab.name} className='nav-item'>           
                  <NavLink className='nav-link' to={tab.path}>
                    {`${tab.name}`}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className='container'>
            {tabs.map((tab) => {
              return (
                <Route key={tab.name} path={tab.path} component={tab.item}/>
              )
            })}
          </div>
        </div>
      </BrowserRouter>
      <SearchIcon/>
    </div>
  )
} 

export default TopicsNavBar;