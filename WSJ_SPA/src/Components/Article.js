import React, {Component} from 'react';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  render(){
    const {articleObj} = this.props;
    return(
      <div className="card">
        <img className="card-img-top" src={articleObj.urlToImage} alt="Card"/>
        <div className="card-body">
          <h5>{articleObj.title}</h5>
          <p className="card-text">
            {articleObj.description}
            <a href='#cardCollapse' className='link' data-toggle='collapse' 
              role="button" aria-expanded="false" aria-controls="cardCollapse">
              Read More...
            </a>
          </p>
          <div className="collapse" id="cardCollapse">
            <div className="card card-body">
              Article text goes here.
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Article;