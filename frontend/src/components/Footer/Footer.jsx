import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="myimage" src={assets.logo_main} alt="" />
                <p>Hello This is created by SANIDHYA VIJAY</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon } alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privace Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6392266438</li>
                    <li>messi.god1029@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className='footer-copyright'> Copyright to SANIDHYA VIJAY</p>
    </div>
  )
}

export default Footer
