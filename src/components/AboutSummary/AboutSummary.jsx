import React from "react";
import styles from '../../scss/About/about.module.scss';
import AboutImg from '../../assets/images/About/thumb.jpg';

const AboutSummary = () => {
  return (
    <div className={styles.mainPage_about}>
      <div className={styles.message_ctn}>
        <h5 className={styles.message_ctn_section_header}>About Us !</h5>
        <h4 className={styles.message_ctn_main}>We Specialize in Manufacturing <br></br>FRP, MS & SS Products. </h4>
        <p className={styles.message_ctn_sub}>
        As a leading force in the Reinforced Composite industry, and with a experiece of more than 20+ years,we have dedicated ourselves to the design and manufacturing of various high-quality products. Our extensive ranges includes FRP Junction Boxes, Ladders, FRP Canopy, Playground Equipments, Railway Lavatory Modules, Portable Cabins, Industrial Mold and Pattern. 
        
      
        </p>
        <p className={styles.message_ctn_sub}>
        we also provide an extensive range of services that encompass all aspects of the manufacturing process like engineering solutions and product development. Our dedicated team works closely with clients to deliver exceptional results that go above and beyond their expectations.
        </p>
        <p className={styles.message_ctn_sub}  >  With a strong track record, our client base boasts renowned industry such as India Railways, ACME India, Encon, Reliance,Shreeji Seeting Pvt.Ltd and many more.This speaks volumes about our ability to meet the diverse needs of different industries and consistently deliver outstanding solutions.</p>
        <div className={styles.message_ctn_knowMore}><button>Know More</button></div>
      </div>
      <div className={styles.image_ctn}>
        <img src={AboutImg}  />
      </div>
    </div>
  );
};

export default AboutSummary;
//Transforming Visions, Empowering Realities
//where ingenuity meets craftsmanship to bring cutting-edge solutions to life."
//At Deva Fibers we are in relentless pursuit of excellence, we aim to deliver  products that exceed our customers' expectations in terms of performance, durability, and aesthetics