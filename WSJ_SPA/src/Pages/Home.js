import React, { Component } from 'react';
// import Column from '../Components/Column';
// import Row from '../Components/Row'
import Section from '../Components/Section';

let top_url = 'https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=e3aa56ecd2054df892a9eedd4eca5fb0';
let recent_url = 'https://newsapi.org/v2/everything?sources=the-wall-street-journal&apiKey=e3aa56ecd2054df892a9eedd4eca5fb0';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      topArticles: null,
      recentArticles: null
    }
  }

  componentWillMount(){
    const topArticles = [];
    const recentArticles = [];

    fetch(top_url, {method: 'GET'}).then(data=>{
      return data.json();
    }).then(data=>{
      data.articles.forEach((article)=>{
        topArticles.push(article);
      });
      this.setState({topArticles: topArticles});
    });

    fetch(recent_url, {method: 'GET'}).then(data=>{
      return data.json();
    }).then(data=>{
      data.articles.forEach((article)=>{
        recentArticles.push(article);
      });
      this.setState({recentArticles: recentArticles});
    });
  }

  render() {
    const {topArticles, recentArticles} = this.state;
    let top;
    let recent;

    if (!topArticles){
      top = 'Loading...';
    } else {
      top = (<Section name='Popular' articles={topArticles}/>);
    } 
    if (!recentArticles){
      recent = 'Loading...';
    } else {
      recent = (<Section name='Trending' articles={recentArticles}/>);
    }

    return (
      <div>
        <br/>
        <div className="home">
          <div className='row'>
            <div className='col-sm'>
              {top}
            </div>
            <div className='col-sm'>
              {recent}
            </div>
          </div>
          <div className=''>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;