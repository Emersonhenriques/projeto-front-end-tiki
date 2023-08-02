import './index.css';
import React, { useState } from 'react';
import img1 from '../../assets/imagens/imagem.jpg';
import img2 from '../../assets/imagens/imagem2.jpg';
import lock from '../../assets/svg/lock.svg';
import Slider from 'react-slick';
import Text from '../Text';

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(img1);
  const [islock, setIslock] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (oldIndex, nextIndex) => {
      console.log('CURRENT', nextIndex);
      switch (nextIndex) {
        case 0:
          setActiveImg(img1);
          setIslock(false);
          break;
        case 1:
          setActiveImg(img2);
          setIslock(false);
          break;
        case 2:
        case 3:
          setActiveImg(lock);
          setIslock(true);
          break;
        default:
      }
    },
  };

  function NextArrow(props) {
    const { className, onClick } = props;

    return <button className={className} onClick={onClick} />;
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return <button className={className} onClick={onClick} />;
  }
  return (
    <div className="conatiner">
      <img
        src={activeImg}
        alt="active"
        className={`img-active  ${islock ? 'lock-active-img' : ''}`}
      />
      <Text class="bold-18 center">
        CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!
      </Text>
      <Slider {...settings}>
        <div className="card">
          <img src={img1} alt="rd-summitv-1" className="rd-summitv" />
          <Text class="bold-14 center">16 de Março</Text>
        </div>
        <div className="card">
          <img src={img2} alt="rd-summitv-2" className="rd-summitv" />
          <Text class="bold-14 center active">17 de Março</Text>
        </div>
        <div className="card">
          <img src={lock} alt="lock" className="lock" />
          <Text class="bold-14 center active">18 de Março</Text>
        </div>
        <div className="card">
          <img src={lock} alt="lock" className="lock" />
          <Text class="bold-14 center active">19 de Março</Text>
        </div>
        <div className="card">
          <img src={lock} alt="lock" className="lock" />
          <Text class="bold-14 center active">20 de Março</Text>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
