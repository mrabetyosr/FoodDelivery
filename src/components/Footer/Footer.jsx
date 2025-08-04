import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer '>
      <div className='footer-content'>
        <div className='footer-left'>
          <img src={assets.logo} alt="logo" />
          <p>Food Delivery. Best appliaction in Town.</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="Instagram" />


        </div>
        <div className='footer-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        <div className='footer-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>29 195 200</li>
            <li>contact@tomato.com</li>
          </ul>  

        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2025 Tomato. All rights reserved.
        </p>
    </div>
    </div>
  );
}

export default Footer;
