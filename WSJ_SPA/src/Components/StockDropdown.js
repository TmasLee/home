import React from 'react';


let data = [
  {
    name: 'DJIA ',
    points: '25013.29 ',
    delta: '+1.21%',
  },
  {
    name: 'Nasdaq ',
    points: '.54 ',
    delta: '+.54%'
  },
  {
    name: 'U.S. 10 Yr ',
    points: '-0/32 Yield ',
    delta: '-3.06%'
  },
  {
    name: 'Crude Oil ',
    points: '72.57 ',
    delta: '+1.81%'
  },
  {
    name: 'Euro ',
    points: '1.1792 ',
    delta: '+0.02%'
  },
  {
    name: 'ADD MORE ',
    points: ' SCROLLING TEXT',
    delta: '+MORE ECONOMY!!'
  },
  {
    name: 'TWO FISH ARE IN A TANK',
    points: 'ONE TURNS TO THE OTHER AND SAYS',
    delta: '-YOU KNOW HOW TO DRIVE THIS THING?'
  }
];

const StockDropdown = () => {
  return (
    <div className='stock'>
      <div className='stock_dropdown'>
        <div className='info_scroll'>
          {data.map((index)=>{
            if (index.delta.charAt(0) === '+'){
              return (
                <a href='' key={`${index.name}`} className='info_scroll_item'>
                  <div className='index_name'> {index.name}</div>
                  <div className='index_points'> {index.points} </div>
                  <div className='index_delta_pos'>{index.delta} </div>
                </a>
              )} else {
              return (
                <a href='' key={`${index.name}`} className='info_scroll_item'>
                  <div className='index_name'> {index.name} </div>
                  <div className='index_points'> {index.points} </div> 
                  <div className='index_delta_neg'>{index.delta}</div>
                </a>
              )
          }
            })}
        </div>
        <div className='dropdown-content'>
          <div className='more_info'> 
            henlo doggo awoo
          </div>
        </div>
      </div>
      <span className="down-caret"></span>
    </div>
  );
}

export default StockDropdown;