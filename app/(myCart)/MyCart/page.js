import MyCart from '@/components/MyCart/MyCart';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar/>
            <MyCart/>
            
        </div>
    );
};

export default page;