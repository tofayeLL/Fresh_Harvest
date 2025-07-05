import Image from "next/image";
import About from "@/assets/BannerImg.jpg";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src={About}
            alt="image"
            width={500}
            height={500}
            className="rounded-full object-cover lg:w-[688px] lg:h-[688px] w-[300px] h-[300px] object-center"
          />


          <div>
            
          </div>
        </div>

        <div>
          <p className="inline-block lg:text-xl text-md font-bold mb-4 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded-lg">
            About us
          </p>
          <h2 className="lg:text-5xl text-4xl  font-bold text-gray-900 mb-6">
            About Fresh Harvest
          </h2>
          <p className="text-gray-600 mb-6 lg:text-base text-sm leading-relaxed">
            Welcome to Fresh Harvest, your premier destination for the finest,
            farm-fresh produce! Our commitment to freshness, quality, and
            sustainability drives everything we do. With a passion for
            connecting you to the best local farms, we bring you a wide variety .
          </p>

          <button className="border-2 lg:text-xl border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
