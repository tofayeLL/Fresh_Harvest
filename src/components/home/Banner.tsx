"use client";
import Image from "next/image"
import { Button } from "@/components/ui/button"
import BannerBg from '@/assets/BannerImg.jpg'



const Banner = () => {
  return (
    <section className="pt-[120px] md:h-[600px] lg:h-[900px] container px-4  mx-auto flex flex-col md:flex-row items-center justify-start space-y-8 md:space-y-0"
    style={{
        backgroundImage: `url(${BannerBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* banner left */}
       <div className="">
      <div className="mx-auto max-w-lg space-y-3">
        {/* Header */}
        <div className="text-start">
          <h1 className="text-lg font-medium text-[#759c40] sm:text-xl">Welcome to Fresh Harvest</h1>
        </div>

        {/* Main Content */}
        <div className="space-y-3">
          {/* Main Heading */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">Fresh Fruits and Vegetables</h2>
          </div>

          {/* Description */}
          <div>
            <p className="text-base text-gray-600 leading-relaxed sm:text-lg">
              At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and
              vegetables
            </p>
          </div>

          {/* Shop Now Button */}
          <div>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-base"
              size="lg"
            >
              Shop Now
            </Button>
          </div>
        </div>

   
         {/* Special Offer Section */}
        <div className="relative mt-12">
        

          {/* Offer Card */}
          <div className="bg-gray-200 rounded-2xl p-6 shadow-lg border border-gray-300 lg:translate-x-20">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Special Offer</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fresh Salad</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  Up to <span className="text-2xl font-bold">70%</span> off
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg text-sm"
                  size="sm"
                >
                  CODE: FRESH25
                </Button>
              </div>
              <div className="ml-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 relative object-center">
                  <Image
                    src="/src/assets/friut.PNG"
                    alt="image"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Download App Section */}
        <div className="pt-8 space-y-4">
          <p className="text-sm text-gray-600 font-medium">Download App:</p>
          <div className="flex space-x-3">
            {/* App Store Button */}
            <button className="flex-1">
              <div className="bg-black rounded-lg px-4 py-3 flex items-center justify-center space-x-2">
                <div className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex-1">
              <div className="bg-black rounded-lg px-4 py-3 flex items-center justify-center space-x-2">
                <div className="text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">GET IT ON</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>


    </section>
  );
};

export default Banner;
