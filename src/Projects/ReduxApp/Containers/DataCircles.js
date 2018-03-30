import React from 'react';

const renderCircles = (props) => {
  return (coordinates, scales, index) => {
    console.log(props.xScale(coordinates[0]), props.yScale(coordinates[1]));
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
  return <g>{props.properties.coordinates.map(renderCircles(props))}</g>
}