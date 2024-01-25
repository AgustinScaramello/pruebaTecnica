import { useState, useEffect } from "react";
import { images } from './images';
import styled from './Carousel.module.css'

import flechaIzq from '../../assets/icons/flechaIzq.png'
import flechaDer from '../../assets/icons/flechaDer.png'


export default function Carousel() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isHovered) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, isHovered]); 

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styled.containerGeneralCarousel}>
        <h3 className={styled.title}>Carrusel</h3>
        <div className={styled.containerCarousel} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className={styled.buttonPrev} onClick={prevImage}><img src={flechaIzq} alt="" /></button>
            <img className={styled.imgSide} src={images[currentIndex <= 0 ? images.length - 1 : currentIndex - 1]} alt={`Imagen ${currentIndex + 1}`} />
            <img className={styled.imgMain} src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
            <img className={styled.imgSide} src={images[currentIndex >= images.length ? 0 : currentIndex + 1]} alt={`Imagen ${currentIndex + 1}`} />
          <button className={styled.buttonNext} onClick={nextImage}><img src={flechaDer} alt="" /></button>
        </div>
    </div>
    );
};