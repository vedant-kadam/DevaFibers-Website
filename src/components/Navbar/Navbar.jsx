import React, { useState } from 'react';
import '../../scss/navbar/navbar.scss'
import logo from '../../assets/images/main-logo.png'
import {BiMenu} from 'react-icons/bi'
import { Link,NavLink } from 'react-router-dom';

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
        <nav ul className='navbar__options_list'>
          <NavLink  to='/'  className='navbar__options_list_item'>
              Home
          </NavLink>
          <NavLink to="/about" className='navbar__options_list_item'>
            About Us
          </NavLink>
          <NavLink to='/products' className='navbar__options_list_item'>
                Products
          </NavLink>
          <NavLink to='/services' className='navbar__options_list_item'>
              Services
          </NavLink>
          <NavLink to='/contact' className='navbar__options_list_item'>
              Contact Us
          </NavLink>
        
            
        </nav>
        <div className='toggleBtn'><BiMenu onClick={toggleNav} /></div>
   </header>
  )
}

export default Navbar