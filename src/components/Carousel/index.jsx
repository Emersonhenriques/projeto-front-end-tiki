import './index.css';
import React, { useState } from 'react';
import Img1 from '../../assets/imagens/imagem.jpg';
import Img2 from '../../assets/imagens/imagem2.jpg';
import Padlock from '../../assets/svg/lock.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Whatsapp from '../../assets/svg/whatsapp.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Slider from 'react-slick';
import Text from '../Text';

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(Img1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [islock, setIslock] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (oldIndex, nextIndex) => {
      setActiveIndex(nextIndex);
      switch (nextIndex) {
        case 0:
          setActiveImg(Img1);
          setIslock(false);
          break;
        case 1:
          setActiveImg(Img2);
          setIslock(false);
          break;
        case 2:
        case 3:
          setActiveImg(Padlock);
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

  function Footer() {
    return (
      <div className="footer-img">
        <Text class="bold-12">Espalhe este SPOILER:</Text>
        <img src={Facebook} alt="Facebook"></img>
        <img src={Linkedin} alt="Linkedin"></img>
        <img src={Whatsapp} alt="Whatsapp"></img>
        <img src={Twitter} alt="Twitter"></img>
      </div>
    );
  }

  return (
    <div className="conatiner">
      <div
        className="card-img-active"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={activeImg}
          alt="active"
          className={`img-active  ${islock ? 'lock-active-img' : ''}`}
        />
        {isHovered && <Footer></Footer>}
      </div>
      <Text class="bold-18 center">
        Confira o que já saiu e o que está por vir!
      </Text>
      <Slider {...settings}>
        <div className="card">
          <img src={Img1} alt="rd-summitv-1" className="rd-summitv" />
          <Text
            class={`bold-14 center ${activeIndex === 0 ? '' : 'not-active'}`}
          >
            16 de Março
          </Text>
        </div>
        <div className="card">
          <img src={Img2} alt="rd-summitv-2" className="rd-summitv" />
          <Text
            class={`bold-14 center ${activeIndex === 1 ? '' : 'not-active'}`}
          >
            17 de Março
          </Text>
        </div>
        <div className="card">
          <img src={Padlock} alt="Padlock" className="lock" />
          <Text
            class={`bold-14 center ${activeIndex === 2 ? '' : 'not-active'}`}
          >
            18 de Março
          </Text>
        </div>
        <div className="card">
          <img src={Padlock} alt="Padlock" className="lock" />
          <Text
            class={`bold-14 center ${activeIndex === 3 ? '' : 'not-active'}`}
          >
            19 de Março
          </Text>
        </div>
        <div className="card">
          <img src={Padlock} alt="Padlock" className="lock" />
          <Text
            class={`bold-14 center ${activeIndex === 4 ? '' : 'not-active'}`}
          >
            20 de Março
          </Text>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
