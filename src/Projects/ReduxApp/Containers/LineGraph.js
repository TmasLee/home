import React from 'react';
import * as d3 from 'd3';
import DataCircles from './DataCircles';
import XYAxis from './x-y-axis';

export default (props) => {
  const xMax = (data) => 
    d3.max(data,(d)=> d[0]);
  const yMax = (data) => 
    d3.max(data,(d)=> d[1]);
  const xMin = (data) => 
    d3.min(data,(d)=> d[0]);
  const yMin = (data) => 
    d3.min(data,(d)=> d[1]);
  const xScale = d3.scaleLinear()
              .domain([xMin(props.coordinates),xMax(props.coordinates)+props.styles.padding/2])
              .range([props.styles.padding*1.5, props.styles.width-props.styles.padding])
              .nice();
  const yScale = d3.scaleLinear()
              .domain([yMax(props.coordinates)+5, yMin(props.coordinates)-props.styles.padding/4])
              .range([props.styles.padding/2, props.styles.height - props.styles.padding])
              .nice();
              
  const scales = {xScale, yScale};
  return (
    <svg width={props.styles.width} height={props.styles.height}>
      <DataCircles {...props} xScale={xScale} yScale={yScale} scales={scales}/>
      <XYAxis {...props} xScale={xScale} yScale={yScale}/>
    </svg>
  )}