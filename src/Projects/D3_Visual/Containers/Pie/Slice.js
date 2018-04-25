import React, {Component} from 'react';
import * as d3 from 'd3';
import {event as currentEvent} from 'd3-selection';

export default class Slice extends Component{
  constructor(props){
    super(props);
    this.state = {
      isHovered: false
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

  }

  onMouseOver(){
    this.setState({isHovered: true});
  }

  onMouseOut(){
    this.setState({isHovered: false});
  }

  render(){
    let {data, color, innerRadius, outerRadius} = this.props;

    if (this.state.isHovered){
      outerRadius *= 1.1;
    }

    let arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);
                
    console.log(this.props);

    return (
      <g onMouseOver={this.onMouseOver}
         onMouseOut={this.onMouseOut}>
        <path d={arc(data)}
              fill={color}/>
        <text className='label'
              transform={arc.centroid(data)}>
          {data.value}
        </text>
      </g>
    )
  }
}

// Tuesday --> Mouse over / cleanup / render correct data for each year
// Wednesday --> transitions 
// Thursday?? --> Make wsj mock up