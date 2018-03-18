import React, { Component } from 'react';

var height = window.innerHeight,
    width = window.innerWidth;

class Background extends Component {

  componentDidMount(){
    this.t = 0;
    this.run();
  }

  color(x,y,r,g,b){
    this.context = this.refs.background.getContext('2d');
    this.context.fillStyle = 'rgb('+ r + ',' + g + ',' + b + ')';
    this.context.fillRect(0, 0, width, height);
  }

  R(x, y, t) {
    return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
  }
  
  G(x, y, t) {
    return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
  }
  
  B(x, y, t) {
    return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
  }

  run(){
    var self = this; 
    function animate(){
      for (var x = 0; x <= 35; x++){
        for (var y = 0; y <= 35; y++){
          self.color(x, y, self.R(x,y,self.t), self.G(x,y,self.t), self.B(x,y,self.t));
        }
      }
      self.t = self.t + .010;
      window.requestAnimationFrame(animate);
    }
    animate();
  }

  render(){
    return(
      <div className='background-canvas'>
        <canvas ref='background'
                width={width} 
                height={height}
        />
      </div>
    );
  }
}

export default Background;