export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose DoodyCalls
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're committed to providing exceptional service and creating cleaner, healthier communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-award-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              EXPERT INSTALLATION
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our trained professionals ensure every station is installed correctly for maximum durability and effectiveness.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-customer-service-2-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              COMPLETE SUPPORT
            </h3>
            <p className="text-gray-700 leading-relaxed">
              From consultation to maintenance, we're here to support you every step of the way with responsive service.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-leaf-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ECO-FRIENDLY
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our solutions promote environmental responsibility with biodegradable bags and sustainable practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <i className="ri-price-tag-3-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              COMPETITIVE PRICING
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Quality service at fair prices with transparent quotes and no hidden fees for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
