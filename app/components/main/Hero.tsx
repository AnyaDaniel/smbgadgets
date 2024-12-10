'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div>
        <Slider {...settings} className='h-[85vh] overflow-hidden'>
            <div className="h-auto bg-[#023F5E]">
                <Image src={''} alt='homeimg' width={500} height={500} className='homeheroimg' />
            </div>
            <div className="h-auto bg-[#023F5E]">
                <Image src={''} alt='homeimg' width={500} height={500} className='homeheroimg' />
            </div>
        </Slider>
    </div>
  )
}

export default Hero