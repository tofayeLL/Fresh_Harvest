"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Leaf, Menu, ShoppingCart, Heart, Minus, Plus, Trash2 } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LoginForm from "../home/LoginForm";
import SignupForm from "../home/SignupForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image, { StaticImageData } from "next/image";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/features/cartSlice";



const Nav = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [authView, setAuthView] = useState<"login" | "signup">("login");
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const dispatch = useDispatch();

  // Inside your Nav component:
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();


  const cartItems = useSelector((state: RootState) => state.cart?.items || []);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // const cartCount= 3;
  console.log("Cart Count:", cartItems.length, cartCount,);


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
                className={`relative font-medium text-gray-700 hover:text-gray-800 transition-all duration-300 ease-in-out ${pathname === link.href
                  ? "after:content-[''] after:block after:h-[2px] after:bg-[#749b3f] after:w-1/2 after:mx-auto  font-bold"
                  : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>





          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Favourites */}
            <Link
              href="/favourites"
              className="relative font-medium text-gray-700 hover:text-gray-800 flex items-center gap-1"
            >
              <Heart className="w-5 h-5" />
              <span className="hidden sm:inline">Favourites</span>
            </Link>


            {/* Cart with Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <div
                  onClick={() => setIsSheetOpen(true)}
                  className="relative cursor-pointer text-gray-700 hover:text-gray-800 flex items-center gap-1"
                >
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="hidden sm:inline">Cart</span>
                </div>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-[400px] p-4 flex flex-col">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Cart Items</h2>

                {cartItems.length === 0 ? (
                  <p className="text-gray-600 mt-8 text-center">Your cart is empty.</p>
                ) : (
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {cartItems.map((item) => {
                      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                      const total = price * item.quantity;

                      return (
                        <div key={item.id} className="flex items-center gap-3 border rounded-lg p-3">
                          <Image
                            src={typeof item.image === "string" ? item.image : (item.image as StaticImageData)}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover border"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            <p className="text-xs text-gray-500 mb-2">
                              Unit Price: ${price.toFixed(2)}
                            </p>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => dispatch(decrementQty(item.id))}
                                className="border rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-medium">{item.quantity}</span>
                              <button
                                onClick={() => dispatch(incrementQty(item.id))}
                                className="border rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-col items-end justify-between gap-2">
                            <div className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                              ${total.toFixed(2)}
                            </div>
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                              className="text-red-500 hover:text-red-600 transition text-xs flex items-center gap-1"
                            >
                              <Trash2 className="w-4 h-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {cartItems.length > 0 && (
                  <>
                    <div className="mt-4 flex justify-between items-center text-base font-semibold border-t pt-4">
                      <span>Subtotal:</span>
                      <span>
                        $
                        {cartItems
                          .reduce((sum, item) => {
                            const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                            return sum + price * item.quantity;
                          }, 0)
                          .toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setIsSheetOpen(false);
                        router.push("/cart");
                      }}
                      className="mt-4 w-full 
               text-white bg-black font-medium py-2 rounded-md transition"
                    >
                      Go to Cart
                    </button>

                  </>
                )}
              </SheetContent>
            </Sheet>


            {/* Sign In Button */}
            <button
              onClick={() => handleOpen("login")}
              className="border border-black px-4 py-1 rounded hover:bg-gray-100 transition"
            >
              Sign In
            </button>
          </div>



          {/* Mobile Right Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Icon (mobile) */}
            <Sheet open={isMobileCartOpen} onOpenChange={setIsMobileCartOpen}>
              <SheetTrigger asChild>
                <button className="relative text-gray-700 hover:text-gray-800">
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-4 flex flex-col">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Your Cart</h2>
                {cartItems.length === 0 ? (
                  <p className="text-gray-600 mt-8 text-center">Your cart is empty.</p>
                ) : (
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {cartItems.map((item) => {
                      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                      const total = price * item.quantity;
                      return (
                        <div key={item.id} className="flex items-center gap-3 border rounded-lg p-3">
                          <Image
                            src={typeof item.image === "string" ? item.image : (item.image as StaticImageData)}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover border"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-sm truncate">{item.name}</p>
                            <p className="text-xs text-gray-500 mb-2">Unit Price: ${price.toFixed(2)}</p>
                            <div className="flex items-center gap-2">
                              <button onClick={() => dispatch(decrementQty(item.id))} className="border rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100">
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-medium">{item.quantity}</span>
                              <button onClick={() => dispatch(incrementQty(item.id))} className="border rounded w-6 h-6 flex items-center justify-center hover:bg-gray-100">
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-between gap-2">
                            <div className="text-sm font-semibold text-gray-700 whitespace-nowrap">${total.toFixed(2)}</div>
                            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 hover:text-red-600 transition text-xs flex items-center gap-1">
                              <Trash2 className="w-4 h-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {cartItems.length > 0 && (
                  <>
                    <div className="mt-4 flex justify-between items-center text-base font-semibold border-t pt-4">
                      <span>Subtotal:</span>
                      <span>
                        $
                        {cartItems
                          .reduce((sum, item) => {
                            const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
                            return sum + price * item.quantity;
                          }, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setIsMobileCartOpen(false);
                        setTimeout(() => router.push("/cart"), 300);
                      }}
                      className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition"
                    >
                      Go to Cart
                    </button>
                  </>
                )}
              </SheetContent>
            </Sheet>

            {/* Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-700">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-3/4 sm:w-1/2">
                <div className="space-y-4 mt-4">
                  {navLinks
                    .filter((link) => link.name !== "Cart")
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-500"
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}

                  {/* 👇 Add mobile cart icon inside the hamburger menu */}
                  <button
                    onClick={() => setIsMobileCartOpen(true)}
                    className="flex items-center gap-2 font-medium text-gray-700 hover:text-blue-500 w-full"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Cart
                    {cartCount > 0 && (
                      <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </button>

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


      </div>




      {/* Combined Login/Signup Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl capitalize">
              {authView === "login" ? "Login" : authView === "signup" ? "Sign Up" : ""}
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
