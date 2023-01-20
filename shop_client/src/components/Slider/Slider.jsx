import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://i.etsystatic.com/37454355/r/il/4c4579/4199123403/il_fullxfull.4199123403_drfl.jpg",
    "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/02/Nendoroid-Most-Expensive-Rarest-1.jpg",
    "https://1.bp.blogspot.com/-IJ1KxhAi9b0/YH6V7Bu3JqI/AAAAAAABEjg/rl8NPzRnm9YD8xlIZGorqsVF3fD2J7chwCLcBGAsYHQ/s1280/Lexy-photography-figure-wallpaper-aowvn.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
