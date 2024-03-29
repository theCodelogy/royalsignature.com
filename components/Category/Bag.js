import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ImageOne from "@/assets/product21.webp";
const Bag = () => {
    return (
        <div>
             <div>
      <div className="flex justify-center items-center  my-5">
        <button
          type="button"
          className="text-xs md:text-xs font-SFProDisplay text-secondary text-opacity-75 border border-primary border-opacity-40 py-1 px-3 rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer select-none"
        >
          Samsung
        </button>

        <button
          type="button"
          className="text-xs md:text-xs font-SFProDisplay text-secondary text-opacity-75 border border-primary border-opacity-40 py-1 px-3 rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer select-none"
        >
          Apple
        </button>

        <button
          type="button"
          className="text-xs md:text-xs font-SFProDisplay text-secondary text-opacity-75 border border-primary border-opacity-40 py-1 px-3 rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer select-none"
        >
          Xiamo
        </button>
        <button
          type="button"
          className="text-xs md:text-xs font-SFProDisplay text-secondary text-opacity-75 border border-primary border-opacity-40 py-1 px-3 rounded-full hover:bg-primary hover:text-white duration-300 cursor-pointer select-none"
        >
          CHUWI
        </button>
      </div>

      <div className="flex my-5">
        {/* filter */}

        <div className="w-1/4 hidden md:block bg-gray-100 sticky top-0 p-4">
          <div className="list-none">

          <div className="px-4 pb-2 pt-4">
      <form>
        <p className="text-center">Price Range</p>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Minimum"
            min="0"
            className="text-2xs p-1 bg-white rounded border border-secondary border-opacity-10 outline-none"
            name="min"
          />
          <input
            type="number"
            placeholder="Maximum"
            min="0"
            className="text-2xs p-1 bg-white rounded border border-secondary border-opacity-10 outline-none"
            name="max"
          />
        </div>
        <div className="mt-2 flex justify-end gap-2">
          <button type="submit" className="bg-primary px-2 text-2xs text-white rounded-sm">
            Filter
          </button>
        </div>
      </form>
    </div>


            <div
              className="px-4 pb-2 pt-4"
              style={{ marginTop: "0px", transitionDuration: "0.2s" }}
            >
              <div>
                <input type="checkbox" id="filter_item_1" name="filter_1" />
                <label htmlFor="filter_item_1" className="ml-2">
                  In Stock
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_2" name="filter_2" />
                <label htmlFor="filter_item_2" className="ml-2">
                  Online Order
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_3" name="filter_3" />
                <label htmlFor="filter_item_3" className="ml-2">
                  Pre Order
                </label>
              </div>
            </div>

            <div
              className="px-4 pb-2 pt-4"
              style={{ marginTop: "0px", transitionDuration: "0.2s" }}
            >
              <input
                id="name"
                required
                className="border rounded-sm h-8 w-full mb-2 px-2 border-[#F17E23] border-opacity-30 outline-none"
                placeholder="Search"
                type="text"
              />
              <div>
                <input type="checkbox" id="filter_item_456" name="filter_456" />
                <label htmlFor="filter_item_456" className="ml-2">
                  12/512GB
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="filter_item_1994"
                  name="filter_1994"
                />
                <label htmlFor="filter_item_1994" className="ml-2">
                  16/1TB
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_598" name="filter_598" />
                <label htmlFor="filter_item_598" className="ml-2">
                  16/256GB
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_455" name="filter_455" />
                <label htmlFor="filter_item_455" className="ml-2">
                  16/2TB
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_444" name="filter_444" />
                <label htmlFor="filter_item_444" className="ml-2">
                  16/512GB
                </label>
              </div>
              <div className="center mt-3 bg-icon rounded bg-opacity-10">
                <button type="button" className="text-sm text-primary w-full">
                  See more...
                </button>
              </div>
            </div>

            <div
              className="px-4 pb-2 pt-4"
              style={{ marginTop: "0px", transitionDuration: "0.2s" }}
            >
              <input
                id="name"
                required
                className="border rounded-sm h-8 w-full mb-2 px-2 border-[#F17E23] border-opacity-30 outline-none"
                placeholder="Search"
                type="text"
              />
              <div>
                <input type="checkbox" id="filter_item_456" name="filter_456" />
                <label htmlFor="filter_item_456" className="ml-2">
                  12/512GB
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="filter_item_1994"
                  name="filter_1994"
                />
                <label htmlFor="filter_item_1994" className="ml-2">
                  16/1TB
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_598" name="filter_598" />
                <label htmlFor="filter_item_598" className="ml-2">
                  16/256GB
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_455" name="filter_455" />
                <label htmlFor="filter_item_455" className="ml-2">
                  16/2TB
                </label>
              </div>
              <div>
                <input type="checkbox" id="filter_item_444" name="filter_444" />
                <label htmlFor="filter_item_444" className="ml-2">
                  16/512GB
                </label>
              </div>
              <div className="center mt-3 bg-icon rounded bg-opacity-10">
                <button type="button" className="text-sm text-primary w-full">
                  See more...
                </button>
              </div>
            </div>



          </div>
        </div>

        <div className=" lg:w-3/4 bg-white p-4">
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-5 ">
            {/* 
<Link href={'ProductsDetails/id'} className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageOne} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
  <p className="text-[#F26E21] text-xs md:text-xs font-semibold">Tk. 74,900</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
<div  className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</div>
  <button className="flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</Link>


<div className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageTwo} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <button className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
  <button className="px-4 py-2 flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div>


<div  className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageThree} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <Link href={'ProductsDetails/id'} className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</Link>
  <button className="px-4 py-2 flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div>


<div className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageOne} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <button className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
  <button className="flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div>


<div className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageOne} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <button className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
  <button className="flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div>


<div className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageOne} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <button className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
  <button className="flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div>


<div className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageOne} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <button className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
  <button className="flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div>


<div className="px-4 py-2  space-y-6  mx-auto bg-white">
<div className="flex justify-center  relative">
  <div className="flex  items-center left-4 right-4 top-4 absolute">
      <div className="flex items-center">
          <svg width={30} className="hover:fill-red-500 hover:stroke-red-500 stroke-2 fill-transparent stroke-white " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg>
      </div>
      <button className="bg-[#F26E21] hover:bg-[#0095FF]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">30% off</button>
  </div>
  <Image className="rounded-lg bg-black/40 w-1/2" src={ImageOne} alt="card navigate ui" />
</div>
<div className="text-center w-[85%] mx-auto font-semibold space-y-2">
  <h6 className="text-sm md:text-xs lg:text-xs">Waterproof Sport HD Monitor for MacBook</h6>
  <p className="text-gray-400 text-xs md:text-xs font-semibold">Macbook Air</p>
</div>
<div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-xs">
  <button className="px-4 py-2 rounded-lg bg-[#F26E21] hover:bg-sky-600 duration-300 hover:scale-105 text-white font-semibold font-sans">Buy now</button>
  <button className="flex items-center ">
    <svg width={35} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM13 8.25C13.4142 8.25 13.75 8.58579 13.75 9V10.25H15C15.4142 10.25 15.75 10.5858 15.75 11C15.75 11.4142 15.4142 11.75 15 11.75H13.75V13C13.75 13.4142 13.4142 13.75 13 13.75C12.5858 13.75 12.25 13.4142 12.25 13V11.75H11C10.5858 11.75 10.25 11.4142 10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H12.25V9C12.25 8.58579 12.5858 8.25 13 8.25Z" fill="#c5c5C7"></path><path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#c5c5C7"></path><path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" fill="#c5c5C7"></path></g></svg>
    <span className="text-[#c7c7c5]">Add to Cart</span>
  </button>
</div>
</div> */}

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
                    src={ImageOne}
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

            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>

            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>

            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>
            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>
            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>
            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>
            <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col  items-center rounded-2xl h-full">
              <a
                className="flex flex-col  items-center w-full"
                href="/product/iphone-11"
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
                    src={ImageOne}
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
              </a>
              <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
                  Buy Now
                </button>
                <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
                  Add to Cart
                </button>
              </div>
            </article>
          </div>
          {/* More text content here */}
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Bag;