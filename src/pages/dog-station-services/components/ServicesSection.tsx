export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Because Every Station Deserves a<br />
              <span className="text-[#F28C28]">Second Chance</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Dog waste stations take a beating — weather, wear, and daily use
              can leave them looking worn and neglected. But that doesn't mean
              they need to be replaced. At DoodyCalls, we specialize in bringing
              tired stations back to life with expert repairs, thorough
              cleaning, and professional reinstallation. Whether it's a wobbly
              post, faded signage, or a station that just needs some TLC, we've
              got you covered.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#F28C28] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-gray-700 text-base">
                  <strong>Quick turnaround</strong> — Most repairs completed
                  within 24-48 hours
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#F28C28] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-gray-700 text-base">
                  <strong>Affordable pricing</strong> — Save money compared to
                  full replacement
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#F28C28] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-gray-700 text-base">
                  <strong>Community-first mentality</strong> — We service all
                  brands, not just our own
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://readdy.ai/api/search-image?query=orange%20dog%20waste%20station%20dispenser%20mounted%20on%20post%20close%20up%20view%20weathered%20used%20condition%20outdoor%20park%20setting%20professional%20photography%20realistic%20detail&width=400&height=500&seq=station1&orientation=portrait"
              alt="Dog waste station"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=green%20dog%20waste%20station%20with%20trash%20bin%20mounted%20on%20post%20park%20setting%20clean%20maintained%20professional%20installation%20outdoor%20community%20amenity%20realistic%20photography&width=400&height=500&seq=station2&orientation=portrait"
              alt="Waste station with bin"
              className="w-full h-80 object-cover rounded-2xl shadow-lg mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
