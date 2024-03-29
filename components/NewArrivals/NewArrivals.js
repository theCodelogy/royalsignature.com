"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import Link from "next/link";
import React from "react";
import imageOne from "@/assets/Products/1.webp";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <div className=" max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              {" "}
              New Arrivals
            </h2>
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
        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <Link href={'/ProductsDetails'} class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </Link>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <div class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <div class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <div class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <div class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <div class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div
  class="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200">
  <span class="bg-[#fb5d5d] text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">5.5 % discount</span>
  <div class="overflow-hidden p-2 rounded-md">
    <Image alt="Iphone 14+" loading="lazy" class="" src={imageOne} style="color: transparent;"/>
    
  </div>
  <div class="px-2 py-3">
    <h5 class="text-base font-semibold text-center">Iphone 14+</h5>
    <p class="text-center text-xs font-semibold flex justify-center gap-2 my-2"><del
        class="text-gray-500">20000$</del><span>189000$</span></p>
    <div class="text-xs flex justify-between flex-wrap mt-1">
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#fb5d5d] hover:bg-transparent rounded text-white hover:text-inherit">Add to cart <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg></button>
      <button class="flex items-center px-2 py-1  gap-x-2 bg-[#fb5d5d] border-2 border-[#ff6a28] hover:bg-transparent rounded text-white hover:text-inherit">View <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewArrivals;
