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
        These sample programs could've been hosted using a Git Hosting site
        but I wanted to implement them by hand for the sake of practicing.
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