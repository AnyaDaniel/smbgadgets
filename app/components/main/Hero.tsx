"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Slide data: image + text
  const slides = [
    {
      image: "/hero.png",
      title: "Power Your Future with Solar",
      description: "Sustainable, affordable, and renewable energy solutions.",
      buttonText: "Get a Quote",
      buttonLink: "/quote",
    },
    {
      image: "/img1.jpg",
      title: "Clean Energy for a Brighter Tomorrow",
      description: "Join thousands of homes and businesses saving with solar.",
      buttonText: "Learn More",
      buttonLink: "/services",
    },
    {
      image: "/img2.jpg",
      title: "Smart Energy Solutions",
      description: "Cut costs, reduce carbon, and take control of your energy.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
  ];

  return (
    <div className="h-[90vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div
              className="relative h-[90vh] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
