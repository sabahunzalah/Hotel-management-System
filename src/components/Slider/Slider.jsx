import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import imageData from "../../components/Slider/SliderData";
import { Typography } from "@mui/material";

const CustomSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className={styles.sliderContainer}>
      <Typography
        sx={{
          fontSize: "30px",
          color: "orange",
          fontWeight: 700,
          textAlign: "center",
          alignSelf: "center",
          marginTop:3,
          marginBottom:3
        }}
      >
        "DREAMS IN REALITY"
      </Typography>
      <Slider {...settings} className={styles.slider}>
        {imageData.map((item, index) => (
          <div key={index}>
            <img
              src={item.src}
              alt={item.title}
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const NextArrow = ({ onClick }) => {
  return (
    <div
      className={styles.arrowNext}
      onClick={onClick}
      style={{
        fontSize: "32px",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className={styles.arrowPre}
      onClick={onClick}
      style={{
        fontSize: "32px",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      &lt;
    </div>
  );
};

export default CustomSlider;
