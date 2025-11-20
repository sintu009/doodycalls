
interface ProductsSectionProps {
  isVisible: boolean;
}

export default function ProductsSection({ isVisible }: ProductsSectionProps) {
  return (
    <section 
      id="products" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Choose the Right Bag for Your Community
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Compostable Bags */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 h-full relative overflow-hidden flex flex-col">
              {/* Background Plant Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <i className="ri-leaf-line text-8xl text-green-600"></i>
              </div>
              
              {/* Eco Badge - Fixed Height */}
              <div className="h-10 mb-6 flex items-start">
                <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <i className="ri-leaf-line mr-2"></i>
                  100% Compostable
                </div>
              </div>

              {/* Title - Fixed Height */}
              <div className="h-20 mb-6 flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-plant-line text-white text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#2E5A51]">
                  Compostable Header and Roll Bags
                </h3>
              </div>

              {/* Content - Flex Grow */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-seedling-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Made from Plant-Based Biopolymers:</h4>
                    <p className="text-gray-700">Designed with sustainability in mind, crafted entirely from renewable, plant-based materials.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-shield-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Durable and Thick:</h4>
                    <p className="text-gray-700">Constructed with a 20-micron thickness to prevent tearing and leakage.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-award-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Certified Eco-Friendly:</h4>
                    <p className="text-gray-700">Meets ASTM D6400 standards — 100% compostable in commercial composting facilities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-recycle-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Environmentally Responsible Disposal:</h4>
                    <p className="text-gray-700">Breaks down naturally in industrial compost systems, reducing landfill waste and methane emissions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-checkbox-circle-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Perfect Fit for DoodyCalls Stations:</h4>
                    <p className="text-gray-700">Designed to fit seamlessly into all DoodyCalls Header and Roll Dispensers, ensuring hassle-free use.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-ruler-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Bag Dimensions:</h4>
                    <p className="text-gray-700">Header – 8.5" x 13" | Roll – 8" x 13".</p>
                  </div>
                </div>
              </div>

              {/* Product Image - Fixed Height */}
              <div className="mt-8 h-48">
                <img 
                  src="https://readdy.ai/api/search-image?query=Eco-friendly%20compostable%20dog%20waste%20bags%20package%20with%20green%20plant-based%20design%2C%20ASTM%20D6400%20certification%20visible%2C%20sustainable%20materials%20highlighted%2C%20natural%20green%20background%20with%20leaf%20patterns%2C%20premium%20eco-conscious%20packaging%20design&width=400&height=300&seq=compostable-bags-product&orientation=landscape"
                  alt="Compostable Dog Waste Bags"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Plastic Bags */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-gray-50 rounded-3xl p-8 h-full relative overflow-hidden flex flex-col">
              {/* Background Icon */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <i className="ri-recycle-line text-8xl text-gray-400"></i>
              </div>

              {/* Badge Placeholder - Fixed Height to Match */}
              <div className="h-10 mb-6"></div>

              {/* Title - Fixed Height */}
              <div className="h-20 mb-6 flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-shopping-bag-line text-white text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#2E5A51]">
                  Plastic Header and Roll Bags
                </h3>
              </div>

              {/* Content - Flex Grow */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-hand-heart-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Easy Access Pull Strap:</h4>
                    <p className="text-gray-700">Designed for smooth, one-at-a-time retrieval, preventing multiple bags from dispensing accidentally.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-shield-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Strong and Reliable:</h4>
                    <p className="text-gray-700">Built with 18-micron thickness, ensuring dependable durability in daily outdoor use.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-cloud-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Weather-Resistant Material:</h4>
                    <p className="text-gray-700">Performs well in all climates — resists tearing and degradation from sun or moisture exposure.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-money-dollar-circle-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Cost-Effective and Practical:</h4>
                    <p className="text-gray-700">Ideal for communities prioritizing budget control while maintaining quality and consistency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-checkbox-circle-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Compatible with DoodyCalls Stations:</h4>
                    <p className="text-gray-700">Sized and engineered to fit perfectly with all DoodyCalls Header and Roll Dispensers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-ruler-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E5A51] mb-2">Bag Dimensions:</h4>
                    <p className="text-gray-700">Header – 8.75" x 13.75" | Roll – 18" x 13".</p>
                  </div>
                </div>
              </div>

              {/* Product Image - Fixed Height */}
              <div className="mt-8 h-48">
                <img 
                  src="https://readdy.ai/api/search-image?query=Standard%20plastic%20dog%20waste%20bags%20package%20with%20clean%20white%20design%2C%20easy-tear%20perforation%20visible%2C%20durable%20plastic%20material%20highlighted%2C%20simple%20professional%20packaging%20with%20clear%20product%20visibility%20and%20reliability%20focus&width=400&height=300&seq=plastic-bags-product&orientation=landscape"
                  alt="Plastic Dog Waste Bags"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
