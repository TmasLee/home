import React, {Component} from 'react';
import * as d3 from 'd3';
import Text from 'react-svg-text';

import Slice from './Slice';

export default class Pie extends Component{
  constructor(props){
    super(props);
    this.state = {
      // displayCenterData: false
    };

    this.colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    this.renderSlice = this.renderSlice.bind(this);
    this.translate = `translate(${this.props.width/2}, ${this.props.height/2})`;
    this.deathTotal = this.getTotalDeaths(this.props.data);

  }

  componentWillReceiveProps(nextProps){
    if (nextProps.data !== this.props.data){
      this.deathTotal = this.getTotalDeaths(nextProps.data);
      console.log(this.deathTotal);
    }
  }

  getTotalDeaths(data){
    let count = 0;
    Object.values(data).forEach((cause)=> {
      count += cause.total;
    });
    return count;
  }

  renderSlice(d, i){
    return (
      <Slice key={i}
            data={d}
            deathTotal={this.deathTotal}
            innerRadius={pieStyles.innerRadius}
            outerRadius={pieStyles.outerRadius}
            color={this.colorScale(i)}
            onMouseOver={this.updateCenterData}/>
          )
        }

  updateCenterData(e){
    e.preventDefault();
    console.log('over slice')
  }

  render(){
    let {data} = this.props;
    let pie = d3.pie()
                .value((d)=> d.total)(data);

    return (
      <svg width={this.props.width} height={this.props.height}>
        <g transform={this.translate}>
          {pie.map(this.renderSlice)}
        </g>
        <Text x={this.props.width/2} y={this.props.height/2} width={pieStyles.innerRadius}
              textAnchor='middle' verticalAnchor='middle' scaleToFit={true}>
          {this.deathTotal}
        </Text>
      </svg>
    )
  }
}

const pieStyles = {
  outerRadius: 280,
  innerRadius: 110,
}

// zoom in function 
// Hover on slice Center of pie--> total deaths in 8 years 
// Clean up code --> messy components due to ever shifting plans --> should use cache to save data