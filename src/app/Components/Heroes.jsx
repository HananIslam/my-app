import React from "react";
import classes from "./Herosection.module.css";
import ContactFormCard from "./ContactFormCard";

const herosection = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSection}>
        <div className={classes.heading}>
          Dua inga lectur
          <br />
          In the Uk Lorem
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
          aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
          bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor
          risus commodo. Tempus molestie morbi ultrices nunc.
          <span className={classes.yellowbg}>
            Semper nam ridiculus duis bibendum risus, arcu arcu.
          </span>
          <br />
          <br />
          Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum
          posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus.
          Porttitor diam a amet pharetra tellus, senectus augue.
          <span className={classes.yellowbg}>
            Semper nam ridiculus duis bibendum risus, arcu arcu.
          </span>
        </p>
        <div className={classes.videocontainer}>
          <img src="/Img.jpeg" />
        </div>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.boxesCollection}>
         
          <div className={classes.boxOne}></div>
          <div className={classes.boxTwo}></div>
          <div className={classes.boxThree}></div>
        </div>
        <ContactFormCard />
        
      </div>
    </div>
  );
};

export default herosection;
