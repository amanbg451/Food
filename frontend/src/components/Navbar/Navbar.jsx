import React from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets";
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' alt="" />
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar