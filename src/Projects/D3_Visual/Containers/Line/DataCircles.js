import React from 'react';

const renderCircles = (props) => {
  return (coordinates, scales, index) => {
    const circleProps = {
      cx : props.xScale(coordinates[0]),
      cy: props.yScale(coordinates[1]),
      r: 2,
      key: scales
    };

    return <circle {...circleProps}/>
  };
};

export default (props) => {
  return <g>{props.coordinates.map(renderCircles(props))}</g>
}