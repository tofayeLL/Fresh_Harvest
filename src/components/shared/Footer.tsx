import Link from 'next/link';
import { MdMailOutline, MdPhone, MdLocationOn } from "react-icons/md";
import Image from 'next/image';
import Payment from '@/assets/BannerImg.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import Icon1 from '@/assets/BannerImg.jpg';

export default function Footer() {
  return (
    <footer className="bg-[#F4F6F6] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="flex flex-col justify-between">
            
            <div>
              <div className="flex items-center space-x-2">
                <Image src="/placeholder.jpg" alt="Fresh Harvests Logo" className="h-8" width={500} height={500} />
              </div>
            </div>

          
            <div>
              <div className="space-x-8">
                <Image src="/placeholder.jpg" alt="App Download" className="" width={500} height={500} />
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-2 text-[#212337]">
            <h3 className="font-semibold">Quick links 1</h3>
            <Link href="#" className="block hover:underline">Home</Link>
            <Link href="#" className="block hover:underline">Shop</Link>
            <Link href="#" className="block hover:underline">About us</Link>
            <Link href="#" className="block hover:underline">Blog</Link>
            <Link href="#" className="block hover:underline">Detail Blog</Link>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-2 text-[#212337]">
            <h3 className="font-semibold">Quick links 2</h3>
            <Link href="#" className="block hover:underline">Favorites</Link>
            <Link href="#" className="block hover:underline">Cart</Link>
            <Link href="#" className="block hover:underline">Signin</Link>
            <Link href="#" className="block hover:underline">Register</Link>
          </div>

          {/* Contact Us */}
          <div className="space-y-2 text-[#212337]">
            <h3 className="font-semibold">Contact us</h3>
            <div className="flex items-center space-x-2">
              <MdPhone className="h-5 w-5 text-gray-500" />
              <span>1234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdMailOutline className="h-5 w-5 text-gray-500" />
              <span>Freshharvests@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdLocationOn className="h-5 w-5 text-gray-500" />
              <span>Tarung Sori Street, Pontianak, Indonesia</span>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Accepted Payment Methods:</h4>
              <div className="flex items-center space-x-2">
                <Image src={Payment} alt="Visa" className="" width={80} height={40} />
                <Image src={Payment} alt="PayPal" className="" width={80} height={40} />
                <Image src={Payment} alt="Apple Pay" className="" width={80} height={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-8 border-t-2 pt-4 border-[#D9D9D9] flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © Copyright 2024. All Rights Reserved by Banana Studio
          </p>
          <div className="flex gap-2">
            <Link href="#" className="bg-white">
              <FaFacebook className="text-3xl" />
            </Link>
            <Link href="#" className="bg-white">
              <FaTwitter className="text-3xl" />
            </Link>
            <Link href="#" className="bg-white">
              <FaInstagram className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}