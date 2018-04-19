import React from 'react';
import * as d3 from 'd3';

import Slice from './Slice';
// import LabeledSlice from './LabeledSlice';

export default (props)=>{
  let pie = d3.pie()
              .sort(null)
              .value((d) => d)(props.data),
      translate = `translate(${props.width/2}, ${props.width/2})`,
      colors = d3.scaleOrdinal(d3.schemeCategory20);
  console.log(pie);
  return (
    <svg width={props.width} height={props.height}>
      <g transform={translate}>
        {pie.map((d,i)=>(
          <Slice key={i}
                data={d}
                innerRadius={props.width/5}
                outerRadius={props.width/2}
                color={colors(i)}
                translate={translate}/>
        ))}
      </g>
    </svg>
  )
}