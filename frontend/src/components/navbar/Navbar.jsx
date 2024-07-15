import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("home")
  const {token,setToken} = useContext(StoreContext)

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo_main} alt="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#aboutus' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" />
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.cart} alt="" /></Link>
        <div className="dot"></div>
      </div>
      {
        !token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        : <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="navbar-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
      }
    
      </div>
    </div>
  )
}

export default Navbar
