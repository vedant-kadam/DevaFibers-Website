import React from "react";
import styles from "../../scss/Carousel/carousel.module.scss";
const CarouselItem = ({ url,imgData,activeIndex }) => {
  return (
    //     <div className={ styles.carousel_item  }>
    //       {/* <div className={styles.item_desc}>
    //         <h1>Varity of Garden Equipments</h1>
    //         <h2>
    //           at an affordable price <br />
    //           Excellent Quality
    //         </h2>
    //       </div> */}
    //       <div className={styles.item_img_ctn}>
    //         <div className={styles.item_img_ctn}>

    //             <img src={ url} alt="" />
    //         </div>
    //       </div>
    //  </div>
    <div className={ imgData.id == activeIndex +1 ? styles.carousel_contanier_slide :styles.carousel_contanier_slide_inactive}>
      <div className={styles.infoTxt}></div>
      <img src={url} />
    </div>
  );
};

export default CarouselItem;
