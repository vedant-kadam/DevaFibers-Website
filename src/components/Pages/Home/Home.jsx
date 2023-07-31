import React from 'react';
import Carousel from '../../Carousel/Carousel';
import AboutSummary from "../../AboutSummary/AboutSummary";
import ProductSummary from '../../ProductSummary/ProductSummary';
const Home = () => {
  return (
    <div>
      <Carousel/>       
      <AboutSummary/>
      <ProductSummary/>
       
    </div>
  )
}

export default Home