import React, { Component } from 'react';

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      projectRender: this.props.project, 
      isVisible: false
    }

    this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick(){
    this.setState({
      isVisible: !(this.state.isVisible)
    });
  }

  render(){

    const Wrapper = this.props.wrapper;

    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.topics}</h6>
            <p className="card-text">{this.props.description}</p>
              <button type='button' className='btn btn-primary' 
              onClick={(e)=>{
                e.preventDefault();
                this.handleOnClick();
              }}>
                {this.props.name}
              </button>
              <br/><br/>
              <div className='Project'>
                {this.state.isVisible ? <Wrapper/> : null}
              </div>
              <br/>
        </div>
      </div>
    )
  }
}

export default Project;