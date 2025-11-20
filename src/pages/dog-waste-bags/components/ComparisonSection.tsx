
interface ComparisonSectionProps {
  isVisible: boolean;
}

export default function ComparisonSection({ isVisible }: ComparisonSectionProps) {
  return (
    <section 
      id="comparison" 
      data-animate 
      className="py-20 bg-gradient-to-br from-[#F6F6F6] to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Compostable Bags vs Plastic Bags
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the clear environmental difference between our bag options
          </p>
        </div>

        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2E5A51] to-green-600 p-6">
            <div className="grid grid-cols-3 gap-4 text-white font-semibold text-lg">
              <div className="text-center">Comparison Factor</div>
              <div className="text-center">Compostable Bags</div>
              <div className="text-center">Plastic Bags</div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-gray-200">
            {/* Source */}
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center font-semibold text-[#2E5A51]">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-seedling-line text-blue-600"></i>
                </div>
                Source
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-plant-line mr-1"></i>
                  Plant-based
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-oil-line mr-1"></i>
                  Petroleum-based
                </span>
              </div>
            </div>

            {/* Breakdown Time */}
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center font-semibold text-[#2E5A51]">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-time-line text-yellow-600"></i>
                </div>
                Breakdown Time
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-timer-line mr-1"></i>
                  90 days
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-infinity-line mr-1"></i>
                  500+ years
                </span>
              </div>
            </div>

            {/* Disposal */}
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center font-semibold text-[#2E5A51]">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-recycle-line text-purple-600"></i>
                </div>
                Disposal
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-leaf-line mr-1"></i>
                  Compostable facility
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-delete-bin-line mr-1"></i>
                  Landfill
                </span>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center font-semibold text-[#2E5A51]">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-earth-line text-green-600"></i>
                </div>
                Environmental Impact
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-thumb-up-line mr-1"></i>
                  Low
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  <i className="ri-thumb-down-line mr-1"></i>
                  High
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#F28C28] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Request a Sample Pack for Your HOA
          </button>
        </div>
      </div>

      {/* Curved Bottom Divider */}
      <div className="relative mt-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
