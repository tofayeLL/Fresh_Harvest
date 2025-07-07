"use client";

import { useState } from "react";
// import Image from "next/image";
// import testimonialImage from "../../assets/testimonial-image.png";
// import testimonialImage2 from "../../assets/testimonial-image2.png";

import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "PAT WELCH 0",
    role: "Fashion Blogger",
    /*  image: testimonialImage, */
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  {
    id: 2,
    name: "ALEX MORGAN 1",
    role: "Designer",
    /* image: testimonialImage2, */
    rating: 5,
    text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 3,
    name: "JAMIE SMITH 2",
    role: "Customer",
    /* image: testimonialImage, */
    rating: 5,
    text: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 4,
    name: "EMMA WATTS 3",
    role: "Event Planner",
    /*  image: testimonialImage2, */
    rating: 4,
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
  },
  {
    id: 5,
    name: "LIAM JOHNSON 4",
    role: "Photographer",
    /*  image: testimonialImage, */
    rating: 4,
    text: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
  },
  {
    id: 6,
    name: "OLIVIA DAVIS 5",
    role: "Content Creator",
    /*  image: testimonialImage2, */
    rating: 5,
    text: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.",
  },
  {
    id: 7,
    name: "NOAH MARTIN 6",
    role: "Developer",
    /* image: testimonialImage, */
    rating: 4,
    text: "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
  },
  {
    id: 8,
    name: "AVA THOMAS 7",
    role: "Entrepreneur",
    /*  image: testimonialImage2, */
    rating: 5,
    text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.",
  },
  {
    id: 9,
    name: "WILLIAM BROWN 8",
    role: "Marketer",
    /*  image: testimonialImage, */
    rating: 4,
    text: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  },
  {
    id: 10,
    name: "ISABELLA CLARK 9",
    role: "Artist",
    /*  image: testimonialImage2, */
    rating: 5,
    text: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get previous and next indices for the carousel
  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  // Function to handle the next testimonial
  const nextTestimonial = () => {
    setActiveIndex(prevIndex);
  };

  // Function to handle the previous testimonial
  const prevTestimonial = () => {
    setActiveIndex(nextIndex);
  };

  return (
    <section className="py-12  lg:py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 id="testimonials-title" className="text-4xl font-bold mb-3">
          Testimonials
        </h2>
        <p className="text-gray-600">See Why People Love Our Custom Apparel</p>
      </div>

      <div className="grid grid-cols-4 gap-4 relative">
        {/* Navigation buttons */}
        <Button
          onClick={nextTestimonial}
          className="absolute top-1/2 -left-5 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-black shadow-md transition-all  z-10"
        >
          <MoveLeft strokeWidth={3} />
        </Button>
        <Button
          onClick={prevTestimonial}
          className="absolute top-1/2 -right-5 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-black shadow-md transition-all  z-10"
        >
          <MoveRight strokeWidth={3} />
        </Button>

        {/* left image */}
        <div className="col-span-1 p-4 hidden lg:flex gap-4 bg-gray-100 rounded-2xl ">
          {/*  <Image
              src={testimonials[prevIndex].image}
              width={220}
              height={280}
              className="w-52 h-72 object-cover rounded-full lg:rounded-lg"
              alt=""
            /> */}
          <div className="flex flex-col justify-between h-[280px] truncate">
            {testimonials[prevIndex].name.split("").map((letter, i) => (
              <span
                key={i}
                className="text-[#222222] opacity-60 font-medium text-lg"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        {/* active image */}
        <div className="col-span-4 lg:col-span-2 p-4 flex gap-4 bg-gray-100 rounded-2xl relative">
          {/*  <Image
              src={testimonials[activeIndex].image}
              width={220}
              height={280}
              className="w-16 h-16 lg:w-52 lg:h-72 object-cover rounded-full lg:rounded-lg"
              // className="size-12 shrink-0 lg:size-auto rounded-full lg:rounded-none"
              alt=""
            /> */}
          <div className=" flex flex-col-reverse lg:flex-col justify-between">
            <div>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="absolute right-4 top-4 hidden sm:flex gap-2 ">
                  {/*  <Image src={comma} width={41} height={52} alt="" />
                    <Image src={comma} width={41} height={52} alt="" /> */}
                </div>
                <p className="text-gray-600 text-justify text-sm sm:text-[17px] leading-[28px] font-[400] pt-2 lg:pt-4">
                  {testimonials[activeIndex].text}
                </p>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-gray-500">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>

        {/* right image */}
        <div className="col-span-1 p-4  hidden lg:flex gap-4 bg-gray-100 rounded-2xl">
          {/* <Image
              src={testimonials[nextIndex].image}
              width={220}
              height={280}
              alt=""
              className="w-52 h-72 object-cover rounded-full lg:rounded-lg"
            /> */}
          <div className="flex flex-col justify-between h-[280px] truncate">
            {testimonials[nextIndex].name.split("").map((letter, i) => (
              <span
                key={i}
                className="text-[#222222] opacity-60 font-medium text-lg"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              index === activeIndex ? "bg-gray-800 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
