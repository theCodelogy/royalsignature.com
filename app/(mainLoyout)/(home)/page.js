import Banner from "@/components/Banner/Banner";
import BestSeller from "@/components/BestSeller/BestSeller";
import Discover from "@/components/Discover/Discover";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import Footer from "@/components/shared/Footer/Footer";
import React from "react";

const page = () => {
  return <div>

    <Banner/>
    <NewArrivals/>
    <BestSeller/>
    <Discover/>
    <FeaturedProducts/>
    <Footer/>
  </div>;
};

export default page;
