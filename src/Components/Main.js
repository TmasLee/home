import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';

class Main extends Component {

  render(){
    return(
      <BrowserRouter>
        <div>
          <ul className='nav nav-tabs justify-content-center'>
            <li className='nav-item'><NavLink className='nav-link' exact to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/aboutme'>About Me</NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' to='/portfolio'>Portfolio</NavLink></li>
          </ul>
          <div className='container'>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutme' component={About}/>
            <Route path='/portfolio' component={Portfolio}/>
          </div>
        </div>
      </BrowserRouter>
      )
  }
}

export default Main;