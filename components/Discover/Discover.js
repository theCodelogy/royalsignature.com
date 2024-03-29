import Image from 'next/image';
import React from 'react';
import ImageOne from '@/assets/BannerImage/banner12.webp'
import ImageTwo from '@/assets/BannerImage/banner11.webp'

const Discover = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
      



<div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>


{/* <div className="relative  h-screen text-white ">
      <div className="absolute inset-0">
        <Image src={ImageOne} alt="Background Image" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
        <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
        <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
      </div>
    </div>
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image src={ImageTwo} alt="Background Image" className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
        <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
        <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
      </div>
    </div> */}

<div className='relative'>

    <div className='absolute inset-0'>
    <Image src={ImageOne}/>
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-[#fff] text-xl font-extrabold mb-4">Sneaker Men’s Collection

</h1>
        
        <a href="#" className=" text-[#fff] hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg underline">Discover now</a>
      </div>

      
</div>

<div>
    <Image src={ImageTwo}/>
</div>




</div>




        </div>
    );
};

export default Discover;