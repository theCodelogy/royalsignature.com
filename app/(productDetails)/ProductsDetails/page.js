import ProductsInformation from '@/components/ProductsInformation/ProductsInformation';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import ProductsDetails from '@/components/productsDetails/productsDetails';
import React from 'react';

const page = () => {
    return (
        <div>
            <ProductsDetails/>
            <ProductsInformation/>
            <RelatedProducts/>
        </div>
    );
};

export default page;