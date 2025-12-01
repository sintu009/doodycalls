export default function ProductSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20green%20dog%20waste%20station%20with%20bag%20dispenser%20installed%20in%20community%20park%2C%20durable%20weather%20resistant%20design%2C%20clean%20modern%20appearance%2C%20bright%20daylight%20photography&width=600&height=700&seq=product1&orientation=portrait"
              alt="Built to Last - Professional dog waste station"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built to Last
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our dog waste stations are engineered for durability and designed for convenience. Each station features weather-resistant construction, easy-access bag dispensers, and secure waste receptacles that keep communities clean year-round.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Weather-Resistant Materials</h3>
                  <p className="text-gray-700">
                    Constructed from high-grade materials that withstand rain, snow, UV exposure, and temperature extremes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-hand-heart-line text-2xl text-green-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User-Friendly Design</h3>
                  <p className="text-gray-700">
                    Easy-to-use bag dispensers and waste receptacles encourage proper disposal and keep your community clean.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-settings-3-line text-2xl text-teal-600"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Low Maintenance</h3>
                  <p className="text-gray-700">
                    Simple refill process and easy cleaning make ongoing maintenance quick and hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
