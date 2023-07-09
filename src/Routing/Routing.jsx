import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import About from '../components/Pages/About/About';
import Product from '../components/Pages/Product & Services/Product';
import Services from '../components/Pages/Product & Services/Services';
import Contact from '../components/Pages/Contact/Contact';

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/products' element={<Product />} /> 
        <Route path='/services' element={<Services/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
    </Routes>
    </>
  )
}

export default Routing