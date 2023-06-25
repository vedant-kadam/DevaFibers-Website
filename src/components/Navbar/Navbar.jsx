import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/navbar/navbar.scss'
import logo from '../../assets/images/main-logo.png'
import {BiMenu} from 'react-icons/bi'

const Navbar = () => {

  const [isActive,setIsActive] = useState(false);

  const toggleNav = ()=>{
    setIsActive(!isActive)
  }
  return (
   <header className={`navbar__ctn  ${isActive ? 'activeNav' :""}`}>
        <div className='navabr_logo__ctn'>
            <img className='navbar__logo' src={logo} alt="DF" />
            <div className='navabr_logo__text'>
                <h1 className='navabr_logo__maintxt'>Deva Fibers</h1>
                <h3 className='navabr_logo__subtxt'><span></span>Making Ideas Reality<span></span></h3>

            </div>
        </div>
        <nav className='navbar__options_list'>
          <li className='navbar__options_list_item'>
              Home
          </li>
          <li className='navbar__options_list_item'>
            About Us
          </li>
          <li className='navbar__options_list_item'>
                Products
          </li>
          <li className='navbar__options_list_item'>
              Services
          </li>
          <li className='navbar__options_list_item'>
              Contact Us
          </li>
            
        </nav>
        <div className='toggleBtn'><BiMenu onClick={toggleNav} /></div>
   </header>
  )
}

export default Navbar