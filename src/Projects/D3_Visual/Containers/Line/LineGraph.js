import React from 'react';
import * as d3 from 'd3';
// import DataCircles from './DataCircles';
import XYAxis from './x-y-axis';

export default (props)=>{
  
  const xMax = (data) =>
    d3.max(data, (d) => {
      d3.max(d, (value) => value)
    }
  ); 
  const yMax = (data) =>
    d3.max(data, (d) => {
      d3.max(d, (value) => value)
    }
  ); 


  const xMin = (data) =>
    d3.min(data, (d) => {
      d3.min(d, (value) => value)
    }
  );
  const yMin = (data) =>
    d3.min(data, (d) => {
      d3.min(d, (value) => value)
    }
  );

  const xScale = d3.scaleLinear()
                   .domain([
                      xMin(props.xData),
                      xMax(props.xData)+props.padding/2
                          ])
                   .range([
                      props.padding*1.5,
                      props.height-props.padding
                          ])
                   .nice();
  const yScale = d3.scaleLinear()
                   .domain([
                      yMax(props.yData)+5,
                      yMin(props.yData)-props.padding/4
                          ])
                   .range([
                      props.padding*1.5,
                      props.height-props.padding
                          ])
                    .nice();
  
  return (
    <svg width={props.width} height={props.height}>
      <XYAxis {...props} yScale={yScale} xScale={xScale}/>
    </svg>
  )
}

// Make dynamic so it can change based on user use
// Work on xyAxis settings --> keep in mind other chart views

// Figure out how to make clean code (dont repeat this.props...)
// Use cache so calculations dont repeat
// Fix other D3 project