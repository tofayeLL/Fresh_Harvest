import React from 'react';
import Image from "next/image"
import { Leaf, ArrowRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  date: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    date: "May 23, 2024",
    image: "/placeholder.svg?height=200&width=300",
    slug: "seasonal-delights-guide",
  },
  {
    id: 2,
    title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    date: "May 23, 2024",
    image: "/placeholder.svg?height=200&width=300",
    slug: "mastering-salad-creations",
  },
  {
    id: 3,
    title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    date: "May 23, 2024",
    image: "/placeholder.svg?height=200&width=300",
    slug: "art-of-meal-prepping",
  },
]

export default function FreshHarvestBlog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mr-3">Fresh Harvest Blog</h1>
            <Leaf className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy
            eating, and culinary inspiration.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-6">
                <time className="text-sm text-gray-500 font-medium">{post.date}</time>

                <h2 className="text-xl font-semibold text-gray-900 mt-2 mb-4 leading-tight">{post.title}</h2>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}