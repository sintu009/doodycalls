export default function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cleaner Spaces Start with <span className="text-teal-600">Smarter Placement</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our professional installation service ensures your dog waste stations are strategically placed for maximum effectiveness. We handle everything from site assessment to final installation, making it easy for property managers, HOAs, and municipalities to maintain clean, healthy outdoor spaces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With years of experience in waste management solutions, we understand the importance of proper placement, durability, and accessibility. Let us help you create a cleaner community that residents and visitors will appreciate.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20worker%20installing%20green%20dog%20waste%20station%20in%20beautiful%20community%20park%20with%20trees%20and%20walking%20paths%2C%20clean%20modern%20installation%20service%2C%20bright%20daylight%2C%20high%20quality%20professional%20photography&width=600&height=700&seq=intro1&orientation=portrait"
              alt="Professional installation service"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-map-pin-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Placement</h3>
            <p className="text-gray-700 leading-relaxed">
              We analyze foot traffic patterns and pet activity to determine optimal station locations for maximum usage and effectiveness.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-xl">
            <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <i className="ri-tools-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Professional Installation</h3>
            <p className="text-gray-700 leading-relaxed">
              Our experienced team ensures secure, level installation with proper anchoring for long-lasting durability in all weather conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
