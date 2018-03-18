import React, { Component } from 'react';
import '../App.css';
import Background from '../Components/Background';
import Main from '../Components/Main';

class App extends Component {

  render() {
    return (
      <div>
        <Background/>
        <div className='container'>
          <div className='border'>
          <div className='col-md'>
            <div className="App">
              <div className='page-header'>
                <div className='header-color'>
                  <a href='https://github.com/sendmebiscuits'>
                    https://github.com/sendmebiscuits
                  </a>
                </div>
              </div>
              <br/>
              <h1 className='display-2'>Thomas Lee</h1>
              <Main/>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
