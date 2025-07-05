"use client";

import { useState } from "react";
import Image from "next/image";
import TImg from "@/assets/BannerImg.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Professional chef",
    image: TImg,
    text: "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
  },
  {
    id: 2,
    name: "Alex Morgan",
    role: "Home Cook",
    image: TImg,
    text: "Fresh Harvest has transformed my cooking experience. The vegetables are incredibly fresh and the variety is amazing. I love how easy it is to order and the delivery is always on time. Highly recommended!",
  },
  {
    id: 3,
    name: "Sarah Wilson",
    role: "Nutritionist",
    image: TImg,
    text: "As a nutritionist, I'm very particular about the quality of produce I recommend. Fresh Harvest consistently delivers top-quality fruits and vegetables that meet my high standards. My clients love them too!",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden min-h-[600px] flex items-center justify-center mx-auto">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-8">
          <p className="inline-block lg:text-xl text-md font-bold mb-4 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded-lg">
            Testimonial
          </p>
          <h2 className=" lg:text-5xl text-4xl font-bold text-gray-900 mb-4 lg:px-0 px-14">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto leading-relaxed lg:text-lg text-md">
            Do not just take our word for it—see what some of our customers have
            to say about their experience with Fresh Harvest.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14 mb-6 ">
          {/* Profile Image */}
          <div className="flex-shrink-0 ">
            <div className="w-56 h-72 lg:w-64 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 max-w-2xl  ">
            <div className="bg-gray-200 rounded-2xl relative  flex flex-col justify-center item-start lg:p-8 p-4">
              <div className="flex-1 flex flex-col justify-center ">
                <blockquote className="text-gray-700 text-lg leading-relaxed ">
                  &quot;{testimonials[activeIndex].text}&quot;
                </blockquote>
              </div>

              <div className="mt-6 flex justify-start items-center ">
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[activeIndex].name} -
                </h4>
                <p className="text-gray-600 pl-1">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-green-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
