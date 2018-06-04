import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className="">
        <br/>
        <div className='center-block'>
          <img src={require('./images/mask.JPG')} alt='mask' className='rounded-circle'/>
        </div>
        <br/><br/>
        <p>Having graduated in December 2017 with a B.S. in Chemistry, I spent the last year and a
        half learning Javascript and improving my abilities as a fullstack developer. While experimenting with
        different libraries I've created small apps and sites for myself to apply concepts I've learned.
        These days I am focusing on React!
        </p>
        <br/>
        <p className='text-center'>Although I was initially interested in studying chemistry, I decided 
        to take programming courses in college. While it was difficult to learn both a new skill
        and a way of thinking, it was then that I realized that I enjoyed coding as much as I had enjoyed learning
        chemistry. Ever since, coding became a passion. </p>
        <br/>
        <p>In hindsight, the core skills needed to understand chemistry are the same ones needed to code.
        Logical reasoning and critical thinking. Both are needed for problem solving and
        have translated well into my coding.</p>
        <br/>
        <blockquote className='blockquote'>
          "Everybody in this country should learn to program a computer, because it teaches you how to think."
          <footer className='blockquote-footer'>Steve Jobs</footer>
        </blockquote>
        <br/>
        <p >With a heart and brain filled with motivation, I am looking forward to working somewhere that will
        have a positive impact on the world!
        </p>
        <br/>
        <br/>
      </div>
    );
  }
}

export default About;