import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
  );
}

export default App;
