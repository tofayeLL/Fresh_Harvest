import Link from "next/link";
import { MdMailOutline, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Leaf } from "lucide-react";
// import Icon1 from '@/assets/BannerImg.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F6] py-8 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col justify-between  lg:w-[30%] ">
            <div>
              <div className="flex items-center space-x-2">
                {/* Green Leaf Icon */}
                <Leaf className="w-6 h-6 text-green-600" />

                {/* Brand Text */}
                <div className="lg:text-4xl sm:text-md font-bold text-black">
                  <Link href="/">Fresh Harvest</Link>
                </div>
              </div>
            </div>

            {/* Download App Section */}
            <div>
              <div className="pt-8 space-y-4 lg:block hidden">
                <p className="text-sm text-black font-medium">Download App:</p>
                <div className="flex  lg:w-[80%] gap-4 lg:mb-0 mb-6">
                  {/* App Store Button */}
                  <button className="flex-1">
                    <div className="bg-black rounded-lg py-1 flex items-center justify-center  ">
                      <div className="text-white ">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">
                          Download on the
                        </div>
                        <div className="text-sm font-semibold text-white">
                          App Store
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Google Play Button */}
                  <button className="flex-1 lg:w-[80%] ">
                    <div className="bg-black rounded-lg py-1 flex gap-2 items-center justify-center ">
                      <div className="text-white">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-gray-300">GET IT ON</div>
                        <div className="text-sm font-semibold text-white">
                          Google Play
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>


          </div>

      <div className="flex-1 grid grid-cols-3">


            {/* Quick Links 1 */}
          <div className="space-y-2 text-[#212337] ">
            <h3 className="font-semibold">Quick links 1</h3>
            <Link href="#" className="block hover:underline">
              Home
            </Link>
            <Link href="#" className="block hover:underline">
              Shop
            </Link>
            <Link href="#" className="block hover:underline">
              About us
            </Link>
            <Link href="#" className="block hover:underline">
              Blog
            </Link>
            <Link href="#" className="block hover:underline">
              Detail Blog
            </Link>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-2 text-[#212337]">
            <h3 className="font-semibold">Quick links 2</h3>
            <Link href="#" className="block hover:underline">
              Favorites
            </Link>
            <Link href="#" className="block hover:underline">
              Cart
            </Link>
            <Link href="#" className="block hover:underline">
              Signin
            </Link>
            <Link href="#" className="block hover:underline">
              Register
            </Link>
          </div>

          {/* Contact Us */}
          <div className="space-y-2 text-[#212337]  ">
            <h3 className="font-semibold">Contact us</h3>
            <div className="flex items-center space-x-2">
              <MdPhone className="h-5 w-5  text-gray-500" />
              <span className="sm:text-xs lg:text-lg">1234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdMailOutline className="h-5 w-5 text-gray-500" />
              <span className="sm:text-xs lg:text-lg flex  justify-center items-center flex-wrap ">Freshharvests@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdLocationOn className="h-5 w-5 text-gray-500" />
              <span className=" ">Tarung Sori Street, Pontianak, Indonesia</span>
            </div>
            <div className="mt-4 lg:block hidden">
              <h4 className="font-semibold">Accepted Payment Methods:</h4>
              <div className="flex items-center space-x-4 mt-2">
                <FaCcVisa
                  className="text-6xl text-blue-600 bg-white p-2"
                  title="Visa"
                />
                <FaCcPaypal
                  className="text-6xl text-blue-800 bg-white p-2"
                  title="PayPal"
                />
                <FaCcApplePay
                  className="text-6xl text-black bg-white p-2"
                  title="Apple Pay"
                />
              </div>
            </div>
          </div>



      </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-8 border-t-2 pt-4 border-[#D9D9D9] flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © Copyright 2024. All Rights Reserved by Banana Studio
          </p>
          <div className="flex lg:gap-4 gap-2">
            <Link href="#" className="bg-black text-white rounded-full p-3">
              <FaTwitter className="lg:text-xl" />
            </Link>
            <Link href="#" className="bg-black text-white rounded-full p-3">
              <FaFacebook className="lg:text-xl" />
            </Link>
            
            <Link href="#" className="bg-black text-white rounded-full p-3">
              <FaInstagram className="lg:text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
