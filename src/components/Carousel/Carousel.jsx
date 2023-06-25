import React, { useState } from "react";
import styles from "../../scss/Carousel/carousel.module.scss";
import CarouselItem from "./CarouselItem";

//import images
import Carousel1 from "../../assets/images/Carousel-img/c-1.png";
import Carousel2 from "../../assets/images/Carousel-img/c-2.png";
import Carousel3 from "../../assets/images/Carousel-img/c-3.png";
//icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      imgUrl: Carousel1,
      name: "img!",
    },
    {
      id: 2,
      imgUrl: Carousel2,
    },
    {
      id: 3,
      imgUrl: Carousel3,
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const SLIDE_LENGTH = carouselData.length;

  const setCurrSlide = (dir) => {
    let currIndex = currentSlideIndex;
    currIndex += dir;
    if (currIndex < 0) {
      currIndex = SLIDE_LENGTH - 1;
    } else if (currIndex >= SLIDE_LENGTH) {
      currIndex = 0;
    }
    console.log(currIndex);
    setCurrentSlideIndex(currIndex);
  };
  const setPrev = () => {
    setCurrSlide(-1);
  };

  const setNext = () => {
    setCurrSlide(1);
  };

  return (
    // <div className={styles.carousel_ctn}>
    // <div className={styles.carousel_ctn_track}>
    //  <div className={styles.carousel_btn_ctn}>
    //  <div className={styles.craousel_action_btn_left} onClick={setPrev} >
    //   <FaArrowLeft fontSize='3rem'/>
    //   </div >
    //   <div className={styles.craousel_action_btn_right} onClick={setNext}>
    //     <FaArrowRight fontSize='3rem'/>

    //     </div>
    //  </div>

    //     <div className={styles.carousel_main_img_ctn}>
    //     {
    //     carouselData.map(item=>{

    //        return (<CarouselItem key={item.id} url={item.imgUrl}/>);
    //     })
    //    }
    //     </div>

    //  </div>
    // </div>
    <div className={styles.heroBody}>
      <div className={styles.carousel_contanier}>
        {carouselData.map((item, index) => (
          <CarouselItem
            url={item.imgUrl}
            imgData={item}
            key={item.id}
            activeIndex={currentSlideIndex}
          />
        ))}

        <div className={styles.carousel_btn_ctn}>
          <div className={styles.craousel_action_btn_left} onClick={setPrev}>
            <FaArrowLeft className={styles.btnIcon} fontSize="3rem" />
          </div>
          <div className={styles.craousel_action_btn_right} onClick={setNext}>
            <FaArrowRight className={styles.btnIcon} fontSize="3rem" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Carousel;
