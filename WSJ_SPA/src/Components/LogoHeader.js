import React from 'react';
import Divider from '../Images/Divider';
import EditionDropdown from './EditionDropdown';

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

if(dd<10) {
  dd = '0'+dd
} 

today = monthNames[mm] + ' ' + dd + ', ' + yyyy;

const LogoHeader = () => {
  return (
    <div className='logo_header'>
      <div className='logo_header-item'>
        <EditionDropdown/>
      </div><Divider/>
      <div className='logo_header-item'>
        {today}
      </div><Divider/>
      <div className='logo_header-item'>
        <a href='https://www.wsj.com/itp' className='link'>Today's Paper</a>
      </div><Divider/>
      <div className='logo_header-item'>
        <a href='https://www.wsj.com/video/royal-wedding-how-will-meghan-markle-adapt-to-life-in-britains-monarchy/B7284D6A-A9B1-4E09-915E-07F26A5D98E4.html' className='link'>Video</a>
      </div>
    </div>
  )
} 

export default LogoHeader;
