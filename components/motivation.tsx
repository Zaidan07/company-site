
import React from 'react';
import Slider from 'react-slick';

const Motivation: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    '"Accounting is our expertise. Well take care of it, so you can focus on yours."',
    '"If you believe it will work, youll see opportunities. If you believe it wont, you will see obstacles."',
    '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    '"Strength does not come from physical capacity. It comes from an indomitable will."',
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} >
            <h1 className='pb-4 font-extrabold text-5xl text-center'>{slide}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Motivation;
