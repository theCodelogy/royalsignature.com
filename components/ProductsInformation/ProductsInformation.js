'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ProductsInformation = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10 border border-gray-200 mt-0 p-10'>
            

            <Tabs>
    <TabList>
      <Tab>Information</Tab>
      <Tab>Description</Tab>
      <Tab>Reviews</Tab>
    </TabList>

    <TabPanel>
    <h2 className='text-2xl font-bold' >iPhone 15 Pro Max</h2>
                <p >Meet the <span className='text-blue-700'>Apple</span> iPhone 15 Pro Max, a game-changing device that redefines the smartphone landscape and sets new industry standards. With its pioneering titanium construction, it sets a new standard for durability and elegance. Powered by a cutting-edge 3nm processor, this phone delivers unparalleled performance. The ultimate camera system, equipped with advanced features, promises magnificent photography and videography. Its high-resolution display offers a visual feast, and the optimized battery with a Type-C charger ensures convenience. Undoubtedly, the iPhone 15 Pro Max represents the Apex of smartphone innovation, making it the best phone to date.</p>
    </TabPanel>


    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>


    <TabPanel>
      <div  className="px-3 pb-4 rounded drop-shadow bg-white mt-6">
            <h2 className=" text-2xl px-2 py-2  border-b-2 border-primary mb-4">Warranty</h2>
            <div>
                <p><strong>Apple Store 1 Year Warranty Support</strong></p>
            </div>
            <span className="pt-4">Explore our <a className=" ">Warranty Policy</a> page for detailed information about our warranty coverage.</span>
        </div>
    </TabPanel>
  </Tabs>



        </div>
    );
};

export default ProductsInformation;