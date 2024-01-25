import { useState } from "react";
import { images } from './images';
import styled from './Carousel.module.css'

export default function Carousel() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styled.containerCarousel}>
      <button className={styled.bottonPrev} onClick={prevImage}>Anterior</button>
        <img className={styled.imgSide} src={images[currentIndex <= 0 ? images.length - 1 : currentIndex - 1]} alt={`Imagen ${currentIndex + 1}`} />
        <img className={styled.imgMain} src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
        <img className={styled.imgSide} src={images[currentIndex < images.length ? currentIndex + 1 : 0]} alt={`Imagen ${currentIndex + 1}`} />
      <button className={styled.bottonNext} onClick={nextImage}>Siguiente</button>
    </div>
  );
};