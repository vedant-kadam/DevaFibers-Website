import React, { useEffect, useRef, useState } from "react";
import classes from "./MiniCarousel.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './MiniCarouselStyle.css';
const MiniCarousel = () => {
  let carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  let wrapperRef = useRef(null);
  const [startX ,setStartX] = useState(0);
  const [startScrollLeft,setStartScrollLeft] = useState();
  let timeOutId = null;
  const dragging = (e) => {
    if (!isDragging) {
      return;
    }
    
    console.log(e.pageX ,startScrollLeft, startX,(startScrollLeft - (e.pageX - startX)));
 
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };
  const dragStart = (e) => {
    if (!isDragging) {
      setIsDragging(true);
      carouselRef.current.classList.add('dragging');
      setStartX(e.pageX);
      setStartScrollLeft(carouselRef.current.scrollLeft);
    }
  };
 const dragStop = (e)=>{
    if(isDragging){
        setIsDragging(false);
        carouselRef.current.classList.remove('dragging');
    }
 }
 const infiniteScrol = (e)=>{
    let currScroll = carouselRef.current.scrollLeft;
    let scrollWidth = carouselRef.current.scrollWidth;
    let offsetWidth = carouselRef.current.offsetWidth;
    // console.log(scrollWidth,offsetWidth,currScroll);
    if(currScroll == 0){
        // console.log('left end');
        carouselRef.current.classList.add("noTransition");
        carouselRef.current.scrollLeft = scrollWidth - (2*offsetWidth);
        carouselRef.current.classList.remove("noTransition");

    }else if(Math.ceil(currScroll)===  scrollWidth - offsetWidth){
        // console.log("right end");
        carouselRef.current.classList.add("noTransition");

        carouselRef.current.scrollLeft = carouselRef.offsetWidth;
        carouselRef.current.classList.remove("noTransition");

    }
   
        clearTimeout(timeOutId)
       
    if(!wrapperRef.current.matches(":hover")){
        console.log('test');
        autoPlay();
    }
 }
  const moveCard= (dir)=>{
    let width = document.querySelector('.dragableCard').offsetWidth;
    carouselRef.current.scrollLeft += dir*width;
  }
const autoPlay = ()=>{
    if(window.innerWidth < 800)return;
    let width = document.querySelector('.dragableCard').offsetWidth;
     let currTimeOut = setTimeout(()=>carouselRef.current.scrollLeft += width,3000);
     timeOutId =currTimeOut;
}
useEffect(()=>{
    autoPlay()
},[]);
  return (
    <div className={classes.wrapper} ref={wrapperRef} onMouseEnter={()=>clearTimeout(timeOutId)} onMouseLeave={autoPlay}>
      <div className={classes.btnCtnLeft} onClick={()=>moveCard(-1)}>
        <FaArrowLeft fontSize={20} />
      </div>

      <ul
        ref={carouselRef}
        className={`${classes.carousel} defaultMiniCarousel`}
        onMouseLeave={dragStop}
        onMouseUp={dragStop}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onScroll={infiniteScrol}
      >
        <li className={`${classes.card} dragableCard`}>
          <div className={classes.img}>
            <img src="" alt="test" draggable="false"/>
          </div>
          <h2>Test User1</h2>
          <span>Test subheadiing</span>
        </li>
        <li className={`${classes.card} dragableCard`}>
          <div className={classes.img} >
            <img src="" alt="test" draggable="false" />
          </div>
          <h2>Test User2</h2>
          <span>Test subheadiing</span>
        </li>
        <li className={`${classes.card} dragableCard`}>
          <div className={classes.img}>
            <img src="" alt="test" draggable="false"/>
          </div>
          <h2>Test User3</h2>
          <span>Test subheadiing</span>
        </li>
        <li className={`${classes.card} dragableCard`}>
          <div className={classes.img}>
            <img src="" alt="test" draggable="false" />
          </div>
          <h2>Test User4</h2>
          <span>Test subheadiing</span>
        </li>
        <li className={`${classes.card} dragableCard`}>
          <div className={classes.img}>
            <img src="" alt="test" draggable="false" />
          </div>
          <h2>Test User5</h2>
          <span>Test subheadiing</span>
        </li>
      </ul>
      <div className={classes.btnCtnRight}>
        <FaArrowRight fontSize={20} onClick={()=>moveCard(1)} />
      </div>
    </div>
  );
};

export default MiniCarousel;
