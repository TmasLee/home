import React, {Component} from 'react';
import Article from './Article';

class Section extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  componentWillMount(){
    if (this.props.name==='Popular'||'Trending'){
      this.addToPopularAndTrending(this.props.articles);
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.articles){
      if (nextProps.name==='Popular'|| 'Trending'){
        this.addToPopularAndTrending(nextProps.articles);
      }
    }
  }

  addToPopularAndTrending(articles){
    this.col1 = [];
    this.col2 = [];
    articles.forEach((article, i)=>{
      if (i%2===0){
        this.col1.push(article);
      } else {
        this.col2.push(article);
      }
    });
  }

  render(){
    const {name, articles} = this.props;

    if (!articles){
      return null;
    } else {
      return(
        <div>
          <h3 className={`${name}`}>{name}</h3>
          <ul className='columns'>
            <li className='col1'>
              {this.col1.map((article)=>{
                return <Article key={article.title} articleObj={article}/>
              })}
            </li>
            <li className='col2'>
              {this.col2.map((article)=>{
                return <Article key={article.title} articleObj={article}/>
              })}
            </li>
          </ul>
        </div>
      )
    }
  }
}

export default Section;