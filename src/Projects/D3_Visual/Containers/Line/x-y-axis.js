import React from 'react';
import Axis from './Axis';

export default (props)=>{
  const xSettings = {
    type: 'x',
    translate: `translate(0,${props.height-props.padding})`,
    scale: props.xScale,
  };
  const ySettings = {
    type: 'y',
    translate: `translate(${props.padding*1.5},0)`,
    scale: props.yScale
  };

  return (
    <g className='xy-axis'>
      <Axis {...ySettings}/>
      <Axis {...xSettings}/>
    </g>
  )
}

