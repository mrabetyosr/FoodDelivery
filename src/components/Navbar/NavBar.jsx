import React from 'react';
import './NavBar.css';
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
// import logo from '../../assets/frontend_assets/logo.png';
import  { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const NavBar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
 <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
 <ul className='navbar-menu'>
    <Link to='/' onClick={() => setMenu("home")} className={ menu==="home"?"active":""}>Home</Link>
    <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</a>
    <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</a>
    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu==="contact-us" ? "active" : ""}>Contact-Us</a>
 </ul>
 <div className="navbar-right"></div>
 <img src={assets.search_icon} alt=""  />
 <div className="navbar-search-icon">
    <Link to='/cart'><img src= {assets.basket_icon} alt="" />
     <span className={getTotalCartAmount()===0?"":"dot"} /></Link>
    
 </div>
 <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
  );
}

export default NavBar;
