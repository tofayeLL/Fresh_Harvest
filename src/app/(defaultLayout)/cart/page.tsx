"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);

  const getTotalPrice = () =>
    cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-28 my-10">
      <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b pb-6"
            >
              <Image
                src={
                  typeof item.image === "string"
                    ? item.image
                    : (item.image as StaticImageData)
                }
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-cover w-24 h-24 sm:w-28 sm:h-28"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm mb-1">
                  Quantity: {item.quantity}
                </p>
                <p className="text-gray-500 text-sm">
                  Price: {item.price}
                </p>
              </div>

              <div className="text-lg font-semibold text-gray-800">
                ${(
                  parseFloat(item.price.replace(/[^0-9.]/g, "")) *
                  item.quantity
                ).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-10 border-t pt-6">
            <span className="text-2xl font-semibold text-gray-800">Total</span>
            <span className="text-2xl font-bold text-green-700">
              ${getTotalPrice()}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end mt-6">
            <Button className="px-8 py-2 text-lg">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
