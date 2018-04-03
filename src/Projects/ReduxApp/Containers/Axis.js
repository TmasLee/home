import React, {Component} from 'react';
import * as d3 from 'd3';

export default class Axis extends Component{
  componentDidMount(){
    this.renderAxis();
  }

  componentDidUpdate(){
    this.renderAxis();
  }

  renderAxis(){
    let scale = this.props.scale;
    let axis;

    if (this.props.type==='x'){

      axis = d3.axisBottom(scale).ticks(5);
      d3.select(this.refs.axis).call(axis);
      // .append('text').style("text-anchor","middle").text(this.props.text)

    } else {

      axis = d3.axisLeft(scale).ticks(5);
      d3.select(this.refs.axis).call(axis);  

    }
  }

  render(){
    return (
      <g className='axis' ref='axis' text={this.props.text} transform={this.props.translate}></g>
    )
  }
}