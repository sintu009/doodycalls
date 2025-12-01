export default function MapSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Installation Process
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From initial consultation to final walkthrough, we make the installation process seamless and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Site Assessment</h3>
                <p className="text-gray-700">
                  We visit your property to evaluate the best locations based on traffic patterns, accessibility, and visibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Planning</h3>
                <p className="text-gray-700">
                  We create a detailed installation plan with recommended station types and optimal placement for your specific needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Installation</h3>
                <p className="text-gray-700">
                  Our trained technicians install stations with precision, ensuring stability, proper height, and secure anchoring.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Final Walkthrough</h3>
                <p className="text-gray-700">
                  We conduct a complete inspection with you to ensure everything meets your expectations and provide maintenance guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=aerial%20view%20community%20park%20map%20with%20marked%20locations%20for%20dog%20waste%20stations%2C%20green%20spaces%2C%20walking%20paths%2C%20strategic%20placement%20planning%2C%20clean%20modern%20design&width=600&height=600&seq=map1&orientation=squarish"
                alt="Strategic placement map"
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
