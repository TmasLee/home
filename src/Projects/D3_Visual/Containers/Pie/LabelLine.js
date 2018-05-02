import React from 'react';
import * as d3 from 'd3';

import Text from 'react-svg-text';

export default (props) => {
  let {name, arcCentroid} = props;

  const x1 = () => {
    return arcCentroid[0];
  }  
  const y1 = () => {
    return arcCentroid[1];
  }
  const x2 =  () => {
    let midAngle = Math.atan2(arcCentroid[1], arcCentroid[0]);
    let x = Math.cos(midAngle) * 320; 
    return x;
  }
  const y2 = () => {
    let midAngle = Math.atan2(arcCentroid[1], arcCentroid[0]);
    let y = Math.sin(midAngle) * 320;
    return y;
  }

  let points = [
    {'x': x1(), 'y': y1()},
    {'x': x2(), 'y': y2()}
  ];
  
  let Line = d3.line()
                .x(d => d.x)
                .y(d => d.y)
                .curve(d3.curveLinear);

  return (
    <g>
      <path stroke='black' strokeWidth='2' d={Line(points)}/>
      <Text x={x2()} y={y2()} dx={-5} dy={-200} width={130}
            textAnchor={'end'}>
        {name}
      </Text>
    </g>
  )
}