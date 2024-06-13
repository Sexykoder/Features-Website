import React from 'react';
import "./components.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='navbar-logo' src="https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg" alt='logo'/>
        <h1 className='app-name'>BRIJAMOHAN JHA</h1>
      </div>
      <input type="text" id="search" className="navbar-search" placeholder="Search"/>
    </div>
  );
}

export default Navbar;

