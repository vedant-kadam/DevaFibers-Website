import React from 'react';
import SectionWrapper from '../UI/SectionWrapper/SectionWrapper';
import styles from '../../scss/ProductSummmary/ProductSummary.module.scss';
import MiniCarousel from '../UI/MiniCarousel/MiniCarousel';

const ProductSummary = () => {
  return (
    <SectionWrapper>
     <div style={{width:'100%'}}>
        <div>Products & Services</div>
        <div>
            <div>
                <div>
                    <MiniCarousel/>
                </div>
                <div></div>
            </div>
        </div>
     </div>

    </SectionWrapper>
  )
}

export default ProductSummary