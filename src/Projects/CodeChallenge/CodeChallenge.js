import React, { Component } from 'react';
import Table from './Table';

class CodeChallenge extends Component {
  constructor(props){
    super(props);
    this.state = {
      antsArray: null,

    }
  }

  componentDidMount(){
    this.fetchAnts();

  }

  fetchAnts(){
    const query = `{
      ants{
        name
        color
        length
        weight
      }
    }`
    fetch('https://antserver-blocjgjbpw.now.sh/graphql', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query})
    })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response.data);
      this.setState({antsArray: response.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {

    if (!this.state.antsArray){
      return <p>Loading...</p>
    }

    return (
      <div className='ant-table'>
        <Table ants={this.state.antsArray}/>
      </div>
    );
  }
}

export default CodeChallenge;

