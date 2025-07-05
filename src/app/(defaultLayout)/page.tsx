"use client";

import AboutUs from "@/components/home/aboutUs";
import Banner from "@/components/home/Banner";
import HervastBlog from "@/components/home/HervastBlog";
import OurProducts from "@/components/home/ourProducts";
import SeasonalFruit from "@/components/home/SeasonalFruit";
import Testimonial from "@/components/home/testimonial";

export default function FreshHarvestWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Banner></Banner>

      {/* Our  Products Section */}
      <OurProducts></OurProducts>

      {/* About Section */}
      <AboutUs></AboutUs>

      {/* Timer Section */}
      <SeasonalFruit></SeasonalFruit>

      {/* testimonials */}
      <Testimonial></Testimonial>
      
      {/* harvest log */}
      <HervastBlog />

    </div>
  );
}
