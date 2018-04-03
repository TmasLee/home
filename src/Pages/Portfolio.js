import React, { Component } from 'react';
import ProjectList from '../Projects/ProjectList';
import Project from '../Components/Project';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: ProjectList,
      current: null
    }

    this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick(name){
    console.log(name);
    this.setState({current: name});
  }

  render() {

    return (
      <div className="Portfolio">
        <br/><br/>
        {this.state.projects.map(project => {
          return (<Project
                  wrapper={project.project}
                  {...project}
                  key={project.name}/>)
        })}
        <br/>
        <br/>
        <img src='https://media.giphy.com/media/l46CyJmS9KUbokzsI/giphy.gif' alt='In progress'/>
        <br/>
        More on the way!
      </div>
    );
  }
}

export default Portfolio;