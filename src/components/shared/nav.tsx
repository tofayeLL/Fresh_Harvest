"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Leaf, Menu, ShoppingCart, Heart } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "../home/LoginForm";
import SignupForm from "../home/SignupForm";

const Nav = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [authView, setAuthView] = useState<"login" | "signup">("login");
  const cartCount = 3; // Replace with Redux state or props if needed

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Favourites", href: "/favourites", icon: <Heart className="w-5 h-5" /> },
    { name: "Cart", href: "/cart", icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  const handleOpen = (type: "login" | "signup") => {
    setAuthView(type);
    setShowModal(true);
  };

  return (
    <header>
      <div className="fixed top-0 left-0 w-full z-50 bg-[#fcfcf2] py-2 lg:px-10">
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <div className="lg:text-3xl text-2xl font-bold text-black">
              <Link href="/">Fresh Harvest</Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium text-gray-700 hover:text-gray-800 transition ${
                  pathname === link.href
                    ? "after:w-2/3 text-gray-800"
                    : "after:w-0"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium text-gray-700 hover:text-gray-800 flex items-center gap-2"
              >
                {link.name === "Cart" ? (
                  <div className="relative">
                    {link.icon}
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </div>
                ) : (
                  link.icon
                )}
                <span className="hidden sm:inline">{link.name}</span>
              </Link>
            ))}

            <button
              onClick={() => handleOpen("login")}
              className="border border-black px-4 py-1 rounded hover:bg-gray-100 transition"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu */}
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
                    {link.name === "Cart" ? (
                      <div className="relative">
                        {link.icon}
                        {cartCount > 0 && (
                          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            {cartCount}
                          </span>
                        )}
                      </div>
                    ) : (
                      link.icon
                    )}
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => handleOpen("login")}
                  className="w-full border border-black px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                  Sign In
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Combined Login/Signup Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl capitalize">
              {authView === "login" ? "Login" : "Sign Up"}
            </DialogTitle>
          </DialogHeader>

          {authView === "login" ? (
            <LoginForm switchToSignup={() => setAuthView("signup")} />
          ) : (
            <SignupForm switchToLogin={() => setAuthView("login")} />
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Nav;
