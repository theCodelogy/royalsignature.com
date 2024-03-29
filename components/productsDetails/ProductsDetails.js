'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import image from '@/assets/2325-79475.jpg' 
import ImageTwo from '@/assets/2325-40052.jpg'
const ProductsDetails = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: image},{ img: ImageTwo}];
    return (
        <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="grid gap-8 md:grid-cols-2">


      {/* images - start */}
      <div className="flex flex-row-reverse justify-between">
        <div className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute ase-linear rounded-lg overflow-hidden"
            >
            {/* text container here */}
            <div className="drop-shadow-lg text-white text-center px-5">
                
                <Image src={sliders[currentSlider].img}/>
            </div>
        </div>
        {/* slider container */}
        <div className="flex flex-col justify-center items-center gap-3 p-2">
            {/* sliders */}
            {sliders.map((slide, inx) => (<Image onClick={() => setCurrentSlider(inx)} key={inx}
                    src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                    alt={slide.title}/>
            ))}
        </div>
    </div>
      {/* images - end */}








      {/* content - start */}
      <div className="md:py-8">
        {/* name - start */}
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500">Fancy Brand</span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Pullover with pattern</h2>
        </div>
        {/* name - end */}
        {/* rating - start */}
        <div className="mb-6 flex items-center md:mb-10">
          <div className="-ml-1 flex gap-0.5">
            {/* Insert your SVG rating stars here */}
          </div>
          <span className="ml-2 text-sm text-gray-500">4.2</span>
          <a href="#" className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">view all 47 reviews</a>
        </div>
        {/* rating - end */}
        {/* color - start */}
        {/* Insert color selection buttons here */}
        {/* color - end */}
        {/* size - start */}
        {/* Insert size selection buttons here */}
        {/* size - end */}
        {/* price - start */}
        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">$15.00</span>
            <span className="mb-0.5 text-red-500 line-through">$30.00</span>
          </div>
          <div className="mt-7 flex items-center gap-2">
        <p className="text-sm min-w-[5rem]">Color:</p>
        <div className="flex items-center flex-wrap gap-2">
            <div className="bg-white cursor-pointer duration-300 rounded overflow-hidden w-8 h-8 center border border-secondary border-opacity-20">
                <div data-tooltip-id="my-tooltip" className="w-6 h-6 rounded bg-card-1" data-tooltip-content="Black Titanium" style={{ backgroundColor: 'rgb(65, 64, 62)' }}></div>
            </div>
            <div className="bg-white cursor-pointer duration-300 rounded overflow-hidden w-8 h-8 center border border-secondary border-opacity-20">
                <div data-tooltip-id="my-tooltip" className="w-6 h-6 rounded bg-card-1" data-tooltip-content="Blue Titanium" style={{ backgroundColor: 'rgb(71, 75, 82)' }}></div>
            </div>
            <div className="bg-white cursor-pointer duration-300 rounded overflow-hidden w-8 h-8 center border border-primary badge-shadow-primary">
                <div data-tooltip-id="my-tooltip" className="w-6 h-6 rounded bg-card-1" data-tooltip-content="Natural Titanium" style={{ backgroundColor: 'rgb(153, 150, 145)' }}></div>
            </div>
            <div className="bg-white cursor-pointer duration-300 rounded overflow-hidden w-8 h-8 center border border-secondary border-opacity-20">
                <div data-tooltip-id="my-tooltip" className="w-6 h-6 rounded bg-card-1" data-tooltip-content="White Titanium" style={{ backgroundColor: 'rgb(229, 228, 222)' }}></div>
            </div>
        </div>
    </div>




    <div className="mt-7 flex items-center gap-2">
        <p className="text-sm min-w-[5rem]">Region:</p>
        <div className="flex items-center flex-wrap gap-2">
            <div className="bg-card-1 py-2 px-3 w-fit duration-300 hover:text-primary !p-0 rounded">
                <button className="px-2 md:px-3 py-1 text-xs md:text-sm md:font-SFProDisplaySemibold">HK</button>
            </div>
            <div className="bg-card-1 py-2 px-3 w-fit duration-300 !p-0 rounded !bg-primary ">
                <button className="px-2 md:px-3 py-1 text-xs md:text-sm md:font-SFProDisplaySemibold">SG / UAE</button>
            </div>
        </div>
    </div>




    <div className="mt-7 flex items-center gap-2">
        <p className="text-sm min-w-[5rem]">Storage:</p>
        <div className="flex items-center flex-wrap gap-2">
            <div className="bg-card-1 py-2 px-3 w-fit duration-300 hover:text-primary !p-0 rounded">
                <button className="px-2 md:px-3 py-1 text-xs md:text-sm md:font-SFProDisplaySemibold">1Tb</button>
            </div>
            <div className="bg-card-1 py-2 px-3 w-fit duration-300 !p-0 rounded !bg-primary ">
                <button className="px-2 md:px-3 py-1 text-xs md:text-sm md:font-SFProDisplaySemibold">256GB</button>
            </div>
            <div className="bg-card-1 py-2 px-3 w-fit duration-300 !p-0 rounded !bg-primary ">
                <button className="px-2 md:px-3 py-1 text-xs md:text-sm md:font-SFProDisplaySemibold">512GB</button>
            </div>
        </div>
    </div>


        
        </div>
        
        {/* price - end */}
        {/* shipping notice - start */}
        <div class="mb-6 flex items-center gap-2 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>

      <span class="text-sm">2-4 day shipping</span>
    </div>
        {/* shipping notice - end */}
        {/* buttons - start */}

        
        <div className="flex gap-2.5">
        <div class="inline-flex items-center mt-2">
        <button
            class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
        </button>
        <div
            class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
            2
        </div>
        <button
            class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
        </button>
    </div>
          <a href="#" className="inline-block flex-1 rounded-lg bg-[#F26E21] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Add to cart</a>
         
        </div>
        {/* buttons - end */}
        {/* description - start */}
        {/* <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>
          <p className="text-gray-500">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.<br /><br />
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div> */}
        {/* description - end */}
      </div>
      {/* content - end */}
    </div>
  </div>
</div>





    </div>
    );
};

export default ProductsDetails;