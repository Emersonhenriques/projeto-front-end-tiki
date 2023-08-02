import React, { useState, useEffect } from 'react';
import img1 from '../../assets/imagens/imagem.jpg';
import './index.css';

const Carousel = () => {
  const slidesData = [img1, img1, img1];
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => {
      window.removeEventListener('resize', updateSlideWidth);
    };
  }, []);

  const updateSlideWidth = () => {
    const slideContainer = document?.querySelector('.slides-container');
    setSlideWidth(slideContainer.clientWidth);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slidePosition = {
    transform: `translateX(-${slideIndex * slideWidth}px)`,
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slides-container" style={slidePosition}>
          {slidesData.map((slide, index) => (
            <img
              className={`slide ${slideIndex === index ? 'active' : ''}`}
              key={index}
              src={slide}
            />
          ))}
        </div>
        <div className="prev-btn" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="next-btn" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
      <div className="dots-container">
        {slidesData.slice(slideIndex, slideIndex + 3).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === 1 ? 'active' : ''}`}
            onClick={() =>
              setSlideIndex(
                (prevIndex) =>
                  (prevIndex + index - 1 + slidesData.length) %
                  slidesData.length
              )
            }
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
