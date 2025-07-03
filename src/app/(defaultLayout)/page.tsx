"use client";

import AboutUs from "@/components/home/aboutUs";
import Banner from "@/components/home/Banner";
import HervastBlog from "@/components/home/HervastBlog";
import OurProducts from "@/components/home/ourProducts";
import Testimonial from "@/components/home/testimonial";

export default function FreshHarvestWebsite() {
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 3,
  //   hours: 16,
  //   minutes: 54,
  //   seconds: 21,
  // });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft((prev) => {
  //       if (prev.seconds > 0) {
  //         return { ...prev, seconds: prev.seconds - 1 };
  //       } else if (prev.minutes > 0) {
  //         return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
  //       } else if (prev.hours > 0) {
  //         return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
  //       } else if (prev.days > 0) {
  //         return {
  //           ...prev,
  //           days: prev.days - 1,
  //           hours: 23,
  //           minutes: 59,
  //           seconds: 59,
  //         };
  //       }
  //       return prev;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="min-h-screen bg-white">
 <Banner></Banner>


      {/* Our  Products Section */}
      <OurProducts></OurProducts>

      {/* About Section */}
      <AboutUs></AboutUs>

      {/* Timer Section */}
      {/* <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
               <p className="inline-block text-xl font-medium mb-2 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded">
 special offer
</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seasonal Fruit Bundle</h2>
            <p className="text-2xl font-bold text-orange-500 mb-8">
              Discount up to <span className="text-3xl">80% OFF</span>
            </p>
            <div className="flex space-x-4 mb-8">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg min-w-[60px]">
                    <div className="text-2xl font-bold text-gray-900">{val.toString().padStart(2, "0")}</div>
                     <p className="text-sm text-gray-600 mt-2 capitalize">{unit}</p>
                  </div>
                 
                </div>
              ))}
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
              CODE: FRESH25
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            
              <Image
                
                src="/placeholder.svg"
                alt="image"
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
         
          </div>
        </div>
      </div> */}
      {/* testimonials */}
      <Testimonial></Testimonial>

      <HervastBlog />
    </div>
  );
}
