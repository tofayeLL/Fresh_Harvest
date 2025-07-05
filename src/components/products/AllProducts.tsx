import Image from "next/image";
import React from "react";
import GuavaImg from '@/assets/BannerImg.jpg';
import type { StaticImageData } from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: string;
}

const products: Product[] = [
  { id: 1, name: "Pomegranate", image: GuavaImg, price: "$6.89/kg" },
  { id: 2, name: "Coconut", image: GuavaImg, price: "$6.89/kg" },
  { id: 3, name: "Orange", image: GuavaImg, price: "$6.89/kg" },
  { id: 4, name: "Mushroom", image: GuavaImg, price: "$6.89/kg" },
  { id: 5, name: "Pomegranate", image: GuavaImg, price: "$6.89/kg" },
  { id: 6, name: "Kiwi", image: GuavaImg, price: "$6.89/kg" },
  { id: 7, name: "Eggplant", image: GuavaImg, price: "$6.89/kg" },
  { id: 8, name: "Banana", image: GuavaImg, price: "$6.89/kg" }, // changed duplicate ID
];

const AllProducts = () => {
  return (
    <div>
      {/* product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-10 gap-4 mb-16">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white p-3 text-center cursor-pointer">
              <div className="mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <h3 className="lg:text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button className="w-full border text-md border-gray-200 text-gray-800 hover:bg-orange-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* see all products button */}
      <div className="lg:pt-8 flex flex-col justify-center items-center">
        <button className="border lg:text-xl text-sm border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer">
          See All Products
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
