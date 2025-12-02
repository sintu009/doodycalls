export default function QuoteSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F28C28] to-[#5da838] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Choose <span className="text-white/90">DoodyCalls</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              We're not just another repair service — we're a community-focused
              team that cares about keeping your property looking its best.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-white/95 text-lg">
                  <strong>Expert Installers:</strong> Years of experience with
                  all station types
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-white/95 text-lg">
                  <strong>Quality Guaranteed:</strong> We stand behind every
                  repair we make
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-white/95 text-lg">
                  <strong>Eco-Friendly Solutions:</strong> Sustainable practices
                  for a cleaner planet
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-white/95 text-lg">
                  <strong>Trusted by Communities:</strong> Serving HOAs, parks,
                  and properties across the region
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Don't Let Small Repairs Become Big Problems
            </h3>
            <p className="text-white/90 text-center mb-8 text-lg leading-relaxed">
              Whether you need a quick fix or a complete reinstallation, we're
              here to help. Get in touch today for a free consultation and
              quote.
            </p>
            <div className="text-center">
              <button className="px-10 py-4 bg-white text-[#F28C28] text-lg font-bold rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl whitespace-nowrap cursor-pointer w-full md:w-auto">
                Schedule a Repair Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
