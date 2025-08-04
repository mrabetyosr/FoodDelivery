import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer></Footer>
    </>
  
  );
}

export default App;
