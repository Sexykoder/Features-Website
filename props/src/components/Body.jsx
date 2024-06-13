import React from 'react'
import "./components.css";
import { NavLink } from 'react-router-dom';

function Body() {
  return (
    <div className='body'>
    <ul className='body-options'>
    <li>
          <NavLink exact to='/' activeClassName='active-link'>About</NavLink> 
        </li>
        <li>
          <NavLink to='/bmi' activeClassName='active-link'>BMI Calculator</NavLink>
        </li>
        <li>
          <NavLink to='/love' activeClassName='active-link'>Love Calculator</NavLink>
        </li>
        <li>
          <NavLink to='/weather' activeClassName='active-link'>Weather Forecast</NavLink>
        </li>
    </ul>
      
    </div>
  )
}

export default Body
