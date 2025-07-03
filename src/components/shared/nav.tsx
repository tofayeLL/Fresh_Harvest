'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Banner from '../home/Banner';

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blog', href: '/blog' },
    { name: 'Favourites', href: '/favourites' },
    { name: 'Cart', href: '/cart' },
  ];

  return (
    <header >
      <div className="fixed top-0 left-0 w-full z-50  text-[#262829] py-4 bg-transparent">
        <div className="container flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-black">
            <Link href="/">Fresh Harvest</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
               className={`relative font-medium text-gray-700 hover:text-gray-800 transition 
  after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
  after:w-0 hover:after:w-2/3 after:h-[2px] after:bg-[#759c40] after:transition-all 
  ${pathname === link.href ? 'after:w-2/3 text-gray-800' : 'after:w-0'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right menu (desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
              className={`relative font-medium text-gray-700 hover:text-gray-800 transition 
  after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
  after:w-0 hover:after:w-2/3 after:h-[2px] after:bg-[#759c40] after:transition-all 
  ${pathname === link.href ? 'after:w-2/3 text-gray-800' : 'after:w-0'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/signin">
              <button className="border border-black px-4 py-1 rounded hover:bg-gray-100 transition">
                Sign In
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block font-medium text-gray-700 hover:text-blue-500"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/signin">
            <button className="mt-2 w-full border border-black px-4 py-2 rounded hover:bg-gray-100 transition">
              Sign In
            </button>
          </Link>
        </div>
      )}




      {/* banner */}
      <Banner></Banner>



    </header>
  );
};

export default Nav;
