"use client";
import React from 'react';

import Image from "next/image";
import { useEffect, useState } from "react";

const SeasonalFruit = () => {

   const [timeLeft, setTimeLeft] = useState({
      days: 3,
      hour: 16,
      min: 54,
      second: 21,
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev.second > 0) {
            return { ...prev, second: prev.second - 1 };
          } else if (prev.min > 0) {
            return { ...prev, min: prev.min - 1, second: 59 };
          } else if (prev.hour > 0) {
            return { ...prev, hour: prev.hour - 1, min: 59, second: 59 };
          } else if (prev.days > 0) {
            return {
              ...prev,
              days: prev.days - 1,
              hour: 23,
              min: 59,
              second: 59,
            };
          }
          return prev;
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);



    return (
        <section>
             <div className="py-28  lg:text-start text-center  bg-gray-50">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <p className="inline-block lg:text-xl text-md font-medium  mb-3 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded">
                          Special Offer
                        </p>
                        <h2 className="lg:text-6xl text-5xl  font-bold text-gray-900 mb-4">
                          Seasonal Fruit Bundle
                        </h2>
                        <p className="text-4xl font-bold text-orange-500 mb-8 lg:px-0 px-16">
                          <span className="text-gray-800">Discount up to</span> <span className="text-4xl">80% OFF</span>
                        </p>
                        <div className="flex space-x-6 mb-8">
                          {Object.entries(timeLeft).map(([unit, val]) => (
                            <div key={unit} className="text-center">
                              <div className="bg-white rounded-lg p-4 shadow-lg min-w-[80px] min-h-[80px]">
                                <div className="lg:text-3xl text-2xl font-bold text-gray-900">
                                  {val.toString().padStart(2, "0")}
                                </div>
                                <p className="text-sm text-gray-600 mt-2 capitalize">
                                  {unit}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="bg-[#176e38] text-xl  text-white font-semibold px-6 py-3 rounded-full">
                          CODE: <span className='text-[#fac814]'>FRESH25</span>
                        </button>
                      </div>
                      <div className="relative w-[100%] h-[100%] mx-auto">
                        <Image
                          src="/orange.PNG"
                          alt="image"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
            
        </section>
    );
};

export default SeasonalFruit;