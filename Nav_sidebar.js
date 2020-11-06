
import React from 'react';
import ReactDOM from 'react-dom';

import "./nav_sidebar.css";

function Nav_sidebar() {
    return (
      <div className="Nav_sidebar">
      <div className="Xorai_header">
          <span className="Xorai">xorai</span>
          <span className="left_tags">
              <span className="lefty">Monmi Dutta</span>
              <span className="lefty">Support</span>
              <span className="lefty">Scheduler</span>
          </span>
      </div>
<div className="sidebar">
   <p className="side_text">Dashboard</p>
   <p className="side_text">Appointments</p>
   <p className="side_text">Customers</p> 
</div>
  <span className="header2">
      <button className="appnt">NEW APPOINTMENT</button>
      <button className="customer">NEW CUSTOMER</button>
  </span>

  <div className="header3">
      <span className="lefthead3">
          <button className="App12">Appointments<span className
          ="numbers">12</span></button>
               <button className="App12">Late<span className
          ="numbers">2</span></button>
               <button className="App12">Waiting<span className
          ="numbers">3</span></button>
      </span>
      <span className="righthead3">
      <button className="App12">Working<span className
          ="numbers">8</span></button>
            <button className="App12">Ready for Pickup<span className
          ="numbers">5</span></button>
            <button className="App12">Weekly Revenue</button>
            <button className="App12"><span className
          ="numbers">$5,672</span></button>
            <button className="App12"><span className
          ="numbers">8:05AM</span></button>
      </span>
  </div>
  <div className="header4">
      <span className="left">
          <span className="tues">Tuesday</span>
        <span className="date">May 22,2013</span>   
           </span>
           <span className="view">
           <span className="vb">View by</span>
           <button className="time">TIME</button>
           <button className="Status">STATUS</button>
           <button className="Advisor">ADVISOR</button>
        
           </span>
  </div>

     </div> 
    );
  }

  export default Nav_sidebar;