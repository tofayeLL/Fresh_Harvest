'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Heart, Minus, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import type { StaticImageData } from 'next/image';
import GuavaImg from '@/assets/BannerImg.jpg'; // replace with actual images if needed

interface Product {
  id: number;
  name: string;
  image: string | StaticImageData;
  price: string;
  description: string;
  category?: string;
}

const products: Product[] = [
  { id: 1, name: "Pomegranate", image: GuavaImg, price: "$6.89/kg", description: "Fresh and juicy pomegranates packed with nutrients." },
  { id: 2, name: "Coconut", image: GuavaImg, price: "$6.89/kg", description: "Sweet coconuts perfect for refreshing drinks and desserts." },
  { id: 3, name: "Orange", image: GuavaImg, price: "$6.89/kg", description: "Citrusy and tangy oranges, rich in vitamin C." },
  { id: 4, name: "Mushroom", image: GuavaImg, price: "$6.89/kg", description: "Organic mushrooms, ideal for a variety of dishes." },
  { id: 5, name: "Pomegranate", image: GuavaImg, price: "$6.89/kg", description: "Fresh and juicy pomegranates packed with nutrients." },
  { id: 6, name: "Kiwi", image: GuavaImg, price: "$6.89/kg", description: "Tangy kiwis full of flavor and vitamins." },
  { id: 7, name: "Eggplant", image: GuavaImg, price: "$6.89/kg", description: "Fresh eggplants, perfect for grilling or roasting." },
  { id: 8, name: "Banana", image: GuavaImg, price: "$6.89/kg", description: "Sweet bananas, a healthy snack for any time." }, // changed duplicate ID
];

export default function ProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = useMemo(() => products.find((p) => p.id === productId), [productId]);
  const relatedProducts = products.filter((p) => p.id !== productId).slice(0, 4);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-semibold text-red-600">Product not found.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 my-14">
      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="space-y-6">
        
            <Badge variant="secondary" className="mb-2 text-green-600 bg-green-50 text-md">
              Fruits
            </Badge>
        

          <h1 className="text-3xl font-bold text-g-900 mb-4">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">5.0 (1 review)</span>
          </div>

          <div className="text-2xl font-bold text-orange-400 mb-6">{product.price}</div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Quantity</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-1 text-sm">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm text-gray-500">kg</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 bg-transparent">
              <Heart className="w-4 h-4 mr-2" />
              Save as favorite
            </Button>
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
              Add to cart
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="description" className="mb-12 w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (1)</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="font-medium">John D.</span>
              </div>
              <p className="text-gray-600 text-sm">
                Excellent quality {product.name}! Fresh and delicious. Will definitely order again.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <div>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-2 text-md text-green-600 bg-green-50">
            Our Products
          </Badge>
          <h2 className="text-2xl font-bold text-gray-900">Related products</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:shadow-xl transition-shadow rounded-2xl">
              <CardContent className="p-2 text-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="mx-auto object-contain mb-2 rounded-2xl"
                />
                <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.price}</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
