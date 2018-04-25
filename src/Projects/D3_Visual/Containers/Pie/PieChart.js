import React, {Component} from 'react';
import * as d3 from 'd3';

import Slice from './Slice';

export default class Pie extends Component{
  constructor(props){
    super(props);

    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    this.renderSlice = this.renderSlice.bind(this);
    this.translate = `translate(${this.props.width/2}, ${this.props.width/2})`;
  }

  renderSlice(d, i){
    return (
      <Slice key={i}
            data={d}
            innerRadius={this.props.width/7}
            outerRadius={this.props.width/3}
            color={this.colorScale(i)}/>
          )
        }

  render(){
    let {data} = this.props;
    let pie = d3.pie()
                .value((d)=> d.total)(data);

    console.log(pie);

    return (
      <svg width={this.props.width} height={this.props.height}>
        <g transform={this.translate}>
          {pie.map(this.renderSlice)}
        </g>
      </svg>
    )
  }
}