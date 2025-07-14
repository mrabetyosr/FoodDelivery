import React from 'react';
import './NavBar.css';
import { useState } from 'react';
// import logo from '../../assets/frontend_assets/logo.png';
import  { assets } from '../../assets/frontend_assets/assets';
const NavBar = () => {
    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
 <img src={assets.logo} alt="" className="logo" />
 <ul className='navbar-menu'>
    <li onClick={() => setMenu("home")} className={ menu==="home"?"active":""}>Home</li>
    <li onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</li>
    <li onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</li>
    <li onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact-Us</li>
 </ul>
 <div className="navbar-right"></div>
 <img src={assets.search_icon} alt=""  />
 <div className="navbar-search-icon">
    <img src= {assets.basket_icon} alt="" />
    <div className="dot"></div>
 </div>
 <button>sign in</button>
    </div>
  );
}

export default NavBar;
