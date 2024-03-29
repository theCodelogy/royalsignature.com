
'use client'
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import BannerOne from '@/assets/BannerImage/banner3.jpeg'
import BannerTwo from '@/assets/BannerImage/Purple and Blue Modern Choose Your Best Partner Banner Landscape (1).png'
import BannerThree from '@/assets/BannerImage/Purple and Blue Modern Choose Your Best Partner Banner Landscape.png'
import BannerFour from '@/assets/BannerImage/Turquoise Blue Shoes Realistic Product Promotion Banner.png'

const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = [BannerOne, BannerTwo , BannerThree , BannerFour];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);
    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
      }, [nextSlider]);


    return (
        <div>
        <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
   
    {/* dots */}
    <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
      {carouselImages.map((_, inx) => (
        <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-black ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
      ))}
    </div>
    {/* Carousel container */}
    <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
      {/* sliders */}
      {carouselImages.map((slide, inx) => (
        <Image key={slide} src={slide} className="w-full h-60 bg-black/20 sm:h-96 md:h-[540px] bg-cover" alt={`Slider - ${inx + 1}`}/>
      ))}
    </div>
</div>



    </div>
    );
};

export default Banner;



