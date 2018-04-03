import React from 'react';
import Axis from './Axis';

export default (props) => {
  const xSettings = {
    type: 'x',
    translate: `translate(0,${props.styles.height-props.styles.padding})`,
    scale: props.xScale,
    text: props.units,
  };
  const ySettings = {
    type: 'y',
    translate: `translate(${props.styles.padding*1.5},0)`,
    scale: props.yScale,
    text: props.units,
  };
  
  return (
    <g className='xy-axis'>
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  )
}