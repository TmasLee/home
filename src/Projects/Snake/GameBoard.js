import React, { Component } from 'react';
import Snake from './Snake';
import Apple from './Apple';

var speed = 10,
    defaultSize = 10,
    canvas_length = 300,
    applePoints = 10;

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Click To Start',
      score: 0,
      appleX: Math.floor(Math.random() * (canvas_length-10)),
      appleY: Math.floor(Math.random() * (canvas_length-10)),
      bodyCount: 1,
      history: [], 
      playerX: 10,
      playerY: 10,
      playerSize: defaultSize,
      xVel: 0,
      yVel: 0,
      state: 1 //1 play 0 game over
    }
  }

  componentDidMount(){
    this.setUpCanvas();
    this.draw();
    this.context = this.refs.canvas.getContext('2d');

    this.refs.canvas.addEventListener('keydown', (e) => {
      switch(e.keyCode){
        case 37: //left
          if (this.state.xVel > 0){
            // do nothing
          } else {
            this.setState({xVel: -speed, yVel: 0});
          }
          break;

        case 38: //up
          if (this.state.yVel > 0){
            // do nothing
          } else {
            this.setState({xVel: 0, yVel: -speed});
          }
          break;

        case 39: //right
          if (this.state.xVel < 0){
            // do nothing
          } else {
          this.setState({xVel: speed, yVel: 0});
        }
          break;

        case 40: //down
          if (this.state.yVel < 0){
            // do nothing
          } else {
            this.setState({xVel: 0, yVel: speed});
          }
          break;

        default: 
          console.log('');
      }
    }, false);

    this.refs.canvas.addEventListener('click', (e) => {
      this.setState({
        message: '',
        xVel: speed,
        state: 1
      });

      if (this.loop){
        return;
      }

      this.loop = setInterval( () => {
        if (this.state.state === 1){
          this.update();
          this.draw();
        }
      }, 100);
    }, false);

  }

  setUpCanvas(){
    // Get canvas context
    this.context = this.refs.canvas.getContext('2d');
    // Color canvas black
    this.context.fillRect(0,0,300,300);
  }

  /**
   * Check boundaries for player collision.
   */
  checkBoundaries(){
    if (this.state.playerX > canvas_length ||
        this.state.playerY > canvas_length ||
        this.state.playerX < 0 ||
        this.state.playerY < 0){
          console.log('game over man game over!');
          this.reset();
        }
  }

  /**
   * Check player + apple/self collision.
   */
  checkCollision(){
    //Apple collision check
    if (this.state.playerX < this.state.appleX + defaultSize &&
      this.state.playerX + defaultSize > this.state.appleX &&
      this.state.playerY < this.state.appleY + defaultSize &&
      defaultSize + this.state.playerY > this.state.appleY){
        this.setState({
          appleX: Math.floor(Math.random() * (canvas_length-10)),
          appleY: Math.floor(Math.random() * (canvas_length-10)),
        });
        this.setState((prevState) => {
          return {
            bodyCount: prevState.bodyCount + 1,
            score: prevState.score + applePoints,
          };
        });
    } else {
      //Self collision check
      this.state.history.forEach((coordinate) => {
        if (this.state.playerX < coordinate[0] + defaultSize &&
          this.state.playerX + defaultSize > coordinate[0] &&
          this.state.playerY < coordinate[1] + defaultSize &&
          defaultSize + this.state.playerY > coordinate[1]){
            this.reset();
          }
      })
    }
  }

  /**
   * Record current position 
   */
  recordPosition(){
    var newPos, 
        newHistory = [];

        //Add to history
    if (this.state.history.length < this.state.bodyCount){

      newPos = [this.state.playerX,this.state.playerY];
      newHistory = this.state.history;
      newHistory.push(newPos);
      this.setState({history: newHistory});

      //Don't do anything 
    } else if (this.state.history.length === this.state.bodyCount){

        newPos = [this.state.playerX,this.state.playerY];
        newHistory = this.state.history;
        newHistory.push(newPos);
        newHistory.shift();
        this.setState({history: newHistory});

    } 
  }

  draw(){
    // When user closes game component, prevent draw
    if (this.refs.canvas === undefined){
      clearInterval(this.loop);
      return;
    }

    this.context = this.refs.canvas.getContext('2d');

    this.context.fillStyle ='black';
    this.context.fillRect(0,0,300,300);
    this.context.font = '20px Arial';
    this.context.textAlign = 'center';
    this.context.fillStyle = 'red';
    this.context.fillText(this.state.message,150,150);

    console.log('draw');
    Apple(this.context,this.state).draw();
    Snake(this.context,this.state).draw();

  }

  update(){
    console.log(this.state.playerX);
    // When user closes game component, prevent update
    if (this.refs.canvas === undefined){
      clearInterval(this.loop);
      return;
    }

    console.log('update');
    this.checkBoundaries();
    this.checkCollision();
    this.recordPosition();
    Snake(this.context,this.state).update();
  }

  // Called when game ends
  reset(){
    this.setState({
      message: 'Click To Start',
      score: 0,
      appleX: Math.floor(Math.random() * (canvas_length-10)),
      appleY: Math.floor(Math.random() * (canvas_length-10)),
      bodyCount: 1,
      history: [], 
      playerX: 10,
      playerY: 10,
      playerSize: defaultSize,
      xVel: speed,
      yVel: 0,
      state: 0
    });
  }

  render() {
    return (
      <div>
        <canvas ref='canvas' tabIndex='1' width={canvas_length} height={canvas_length}/>
        <br/>
        Score = {this.state.score}
      </div>
    )
  }
}

export default GameBoard;