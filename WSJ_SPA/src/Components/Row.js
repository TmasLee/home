import React from 'react';
import Article from './Article';

const Row = ({article}) =>{
  return (
  <div className='row align-items-start'>
    <div className='col-md-6'>
      {article}
    </div>
  </div>
  )
}

export default Row;