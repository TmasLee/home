import React, { Component } from 'react';
import {connect} from 'react-redux';

import LogoHeader from './Components/LogoHeader';
import TopicsNavBar from './Components/TopicsNavBar';
import SubscribeHeader from './Components/SubscribeHeader';
import HeaderLine from './Images/HeaderLine';
import {topics_nav} from './NavBarTypes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    const {width} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <SubscribeHeader/>
        </header>
        <h1 className="App-title">
          <img src={require('./Images/logo.svg.png')}
              className='logo' alt='logo'></img>
          <LogoHeader/>
          <HeaderLine windowWidth={width}/>
        </h1>
        <TopicsNavBar tabs={topics_nav} type={'topics_nav'}/>
      </div>
    );
  }
}

export default connect((state,props)=>{
  return {
    
  }
})(Main);

// Grid layout of body
// Make and check Collapse working 
// Add button for news headline API
// Side bar
// sticky topics header navbar
// search bar debounce redux stuff?

// Sub + sign in forms
// catstreet journal functional
// clean up css + fix css + dropdown for stocks + finalize style