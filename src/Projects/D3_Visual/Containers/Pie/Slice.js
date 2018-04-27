import React, {Component} from 'react';
import * as d3 from 'd3';

import LabelLine from './LabelLine';

export default class Slice extends Component{
  constructor(props){
    super(props);
    this.state = {
      isHovered: false,
      showLabel: true,
      showLabelLine: true
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.percent = ((this.props.data.value/this.props.deathTotal)*100).toFixed(2);

  }

  componentWillMount(){
    // Show label and percent, no label line
    if (this.percent >= 20){
      this.setState({
        showLabel: true,
        showLabelLine: false
      })
    }
    // Show label and percent and label line
    if ((this.percent > 2.00)&&(this.percent < 10)){
      this.setState({
        showLabel: true,
        showLabelLine: true
      })
    }
    // No label or percent or label line
    if (this.percent <= 2.00){
      this.setState({
        showLabel: false,
        showLabelLine: false
      })
    }
  }

  onMouseOver(){
    this.setState({isHovered: true});
  }

  onMouseOut(){
    this.setState({isHovered: false});
  }

  render(){
    let {data, color, innerRadius, outerRadius} = this.props;
    let labelLine = null;
    let label = null;
    let percentDisplay = null;

    if (this.state.isHovered === true){
      outerRadius *= 1.1;
    }

    let arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);

    if ((this.state.showLabel === true)&&(this.state.showLabelLine === false)){
      labelLine = null;
      label = data.data.name;
      percentDisplay= this.percent + '%';
    }
    else if ((this.state.showLabel === true)&&(this.state.showLabelLine === true)){
      labelLine = <LabelLine data={data} percentage={this.percent} arcCentroid={arc.centroid(data)}/>;
      label = null;
      percentDisplay= this.percent + '%';
    }
    else if ((this.state.showLabel === false)&&(this.state.showLabelLine === false)){
      labelLine = null;
      label = null;
      percentDisplay = null;
    }

    return (
      <g onMouseOver={this.onMouseOver}
         onMouseOut={this.onMouseOut}>
        <path d={arc(data)}
              fill={color}/>
        {labelLine}
        <text transform={`translate(${arc.centroid(data)})`}>
          {label}
          {percentDisplay}
        </text>
      </g>
    )
  }
}

// Friday --> cleanup / render correct data for each year / onClick slice
// Sat/Sun --> transitions 