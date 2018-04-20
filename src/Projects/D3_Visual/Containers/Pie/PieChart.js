import React from 'react';
import * as d3 from 'd3';

import Slice from './Slice';
// import LabeledSlice from './LabeledSlice';

export default (props)=>{
  // Holds array of arrays. Each array is an array that holds deaths in that year
  let deathsPerYearData = Object.values(props.data),
      numberOfDeathsPerYear = [];

  deathsPerYearData.forEach((deathsInYear)=>{
    numberOfDeathsPerYear.push(deathsInYear.length);
  });
  
  let pie = d3.pie()
              .sort(null)
              .value((d) => d)(numberOfDeathsPerYear),
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