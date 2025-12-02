export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=aerial%20view%20beautiful%20park%20with%20green%20grass%20walking%20paths%20trees%20dog%20waste%20stations%20visible%20from%20above%20professional%20photography%20clean%20maintained%20community%20outdoor%20space%20birds%20eye%20perspective&width=800&height=600&seq=aerial-park&orientation=landscape"
              alt="Park aerial view"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F28C28] rounded-full flex items-center justify-center shadow-xl">
              <i className="ri-tools-fill text-5xl text-white"></i>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We Don't Just Fix —{" "}
              <span className="text-[#F28C28]">We Improve</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our approach goes beyond simple repairs. We assess each station
              holistically, identifying not just what's broken but what could
              work better. From strategic relocation to upgraded hardware, we
              make sure every fix adds long-term value to your property.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-lightbulb-line text-2xl text-[#F28C28]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Strategic Relocation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We evaluate traffic patterns and suggest better placements
                    to improve usage and reduce maintenance
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl text-[#F28C28]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Upgraded Hardware
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Replace worn components with durable, weather-resistant
                    materials built to last
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-heart-line text-2xl text-[#F28C28]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Preventive Maintenance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identify potential issues before they become problems,
                    saving you time and money
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
