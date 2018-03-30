import React from 'react';
import * as d3 from 'd3';
import DataCircles from './DataCircles';

const xMax = (props) => d3.max(props.coordinates,(d) => d[0]);

const yMax = (props) => d3.max(props.coordinates,(d) => d[1]);

// const xScale = (props) => {
//   return d3.scaleLinear()
//     .domain([0, xMax(props)])
//     .range([props.styles.padding, props.styles.width - props.styles.padding * 2]);
//   return d3.scaleLinear()
//     .domain([0,2016])
//     .range([30,470]);
// }

// const yScale = (props) => {
//   return d3.scaleLinear()
//     .domain([0, yMax(props)])
//     .range([props.styles.height - props.styles.padding, props.styles.padding]);
//   return d3.scaleLinear()
//     .domain([0,55])
//     .range([770,30]);
// }

const xScale = d3.scaleLinear()
              .domain([1895,2016])
              .range([10,280]);
const yScale = d3.scaleLinear()
              .domain([49,55])
              .range([49,55]);

export default (props) => {
  // console.log((xScale(10)));
  const scales = { xScale: xScale, yScale: yScale};
  return (
    <svg width={props.styles.width} height={props.styles.height}>
      <DataCircles properties={props} xScale={xScale} yScale={yScale}/>
    </svg>
    )}