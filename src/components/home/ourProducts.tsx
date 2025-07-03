import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllProducts from "../products/AllProducts";

export default function OurProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      {/* header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block text-md font-bold mb-4 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded-lg">
            Our Products
          </p>
          <h2 className="lg:text-4xl text-lg font-bold text-gray-900 mb-4">
            Our Fresh Products
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto lg:text-base text-xs">
            We pride ourselves on offering a wide variety of fresh and flavorful
            fruits, vegetables, and salad ingredients.
          </p>
        </div>

        <div className="w-full mx-auto space-y-4">
          <Tabs defaultValue="all" className="w-full">
            {/* Tab List Container with flex justify-between */}
            <div className="flex flex-col lg:flex-row justify-center items-center mb-6">
              <TabsList className="w-full lg:flex lg:items-center grid grid-cols-2 lg:gap-4 gap-3 rounded-lg max-w-md bg-white">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-[#749b3f] data-[state=active]:text-white text-[#333333] cursor-pointer border border-gray-200 rounded-lg py-[18px]"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="fruits"
                  className="data-[state=active]:bg-[#749b3f] data-[state=active]:text-white text-[#333333]  cursor-pointer border border-gray-200 rounded-lg py-[18px]"
                >
                  Fruits
                </TabsTrigger>
                <TabsTrigger
                  value="vegetables"
                  className="data-[state=active]:bg-[#749b3f] data-[state=active]:text-white text-[#333333]  cursor-pointer border border-gray-200 rounded-lg py-[18px]"
                >
                  Vegetables
                </TabsTrigger>
                <TabsTrigger
                  value="salad"
                  className="data-[state=active]:bg-[#749b3f] data-[state=active]:text-white text-[#333333]  cursor-pointer border border-gray-200 rounded-lg py-[18px]"
                >
                  Salad
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-6  mt-20 lg:mt-0">
              <AllProducts />
            </TabsContent>

            <TabsContent value="all images">
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">
                  See all new images
                </h2>
                <p className="text-gray-600">
                  Your saved items will appear here.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="all documents">
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">
                  {" "}
                  See all new documents
                </h2>
                <p className="text-gray-600">
                  Game content will be displayed here.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="download">
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold mb-2">Download</h2>
                <p className="text-gray-600">
                  Roadmap content will be displayed here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
