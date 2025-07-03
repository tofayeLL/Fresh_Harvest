import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Blog from "@/assets/BannerImg.jpg";

export default function HervastBlog() {
  const blogPosts = [
    {
      id: 1,
      date: "May 23, 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      image: Blog,
    },
    {
      id: 2,
      date: "May 23, 2024",
      title:
        "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      image: Blog,
    },
    {
      id: 3,
      date: "May 23, 2024",
      title:
        "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      image: Blog,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <p className="inline-block text-md font-bold mb-4 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded-lg">
            Our Blogs
          </p>
          <h1 className="text-lg md:text-4xl font-bold text-gray-900 mb-4">
            Fresh Harvest Blog
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Welcome to the Fresh Harvest Blog, your go-to resource for all
            things related to fresh produce, healthy eating, and culinary
            inspiration.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="object-cover w-[388px] h-[260px] rounded-lg"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 font-medium">
                  {post.date}
                </time>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                  {post.title}
                </h2>
                <Link
                  href={"/"}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  <button className="flex gap-2 justify-center items-center">
                    {" "}
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
