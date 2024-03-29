"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Link from 'next/link';
import React from 'react';
import imageOne from '@/assets/Products/1.webp'
import Image from 'next/image';



const FeaturedProducts = () => {



    
    return (
        <div className=' max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10'>
          

          <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div class="">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"> Featured Products</h2>

     
    </div>
 

  </div>
</div>



<Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        
          <SwiperSlide >
          <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
       <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide >
     <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide >
     <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
     <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide >
     <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide >
     <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <Link
                href={"ProductsDetails/id"}
                className="flex flex-col  items-center w-full"
              >
                <div className="absolute top-0 right-0">
                  <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                    23 % OFF
                  </p>
                </div>
                <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
                  <Image
                    alt="iPhone 11"
                    loading="lazy"
                    width="145"
                    height="145"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    src={imageOne}
                    style={{ color: "transparent" }}
                  />
                </figure>
                <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
                  iPhone 11
                </p>
                <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
                  58000৳
                  <del className="font-SFProDisplayMedium ml-2 text-xs">
                    ৳75000
                  </del>
                </p>
              </Link>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
   
      </Swiper>




        </div>
    );
};

export default FeaturedProducts;