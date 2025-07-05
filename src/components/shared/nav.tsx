"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Leaf, Menu } from "lucide-react";
import LoginForm from "../home/LoginForm";
import { ShoppingCart, Heart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const Nav = () => {
  const pathname = usePathname();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartCount] = useState(3);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    {
      name: "Favourites",
      href: "/favourites",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      name: "Cart",
      href: "/cart",
      icon: <ShoppingCart className="w-5 h-5 " />,
    },
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLoginModal(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header>
      <div className="fixed top-0 left-0 w-full z-50 text-[#262829] py-2   bg-[#fcfcf2] lg:px-10">
        <div className="flex justify-between items-center h-16 px-4 ">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <div className="lg:text-3xl text-2xl sm:text-md font-bold text-black">
              <Link href="/">Fresh Harvest</Link>
            </div>
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
                  ${
                    pathname === link.href
                      ? "after:w-2/3 text-gray-800"
                      : "after:w-0"
                  }`}
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
                className="relative font-medium text-gray-700 hover:text-gray-800 transition flex items-center gap-1"
              >
                {link.icon && (
                  <div className="relative">
                    {link.icon}
                    {link.name === "Cart" && cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </div>
                )}
                <span className="hidden sm:inline ml-1">{link.name}</span>
              </Link>
            ))}

            <button
              onClick={() => setShowLoginModal(true)}
              className="border border-black px-4 py-1 rounded hover:bg-gray-100 transition"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Toggle using Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-gray-700">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-3/4 sm:w-1/2">
              <div className="space-y-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-500"
                  >
                    {link.icon && (
                      <div className="relative">
                        {link.icon}
                        {link.name === "Cart" && cartCount > 0 && (
                          <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            {cartCount}
                          </span>
                        )}
                      </div>
                    )}
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-full border border-black px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                  Sign In
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Login</DialogTitle>
          </DialogHeader>
          <LoginForm />
          <DialogClose asChild />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Nav;
