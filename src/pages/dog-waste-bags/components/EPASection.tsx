
interface EPASectionProps {
  isVisible: boolean;
}

export default function EPASection({ isVisible }: EPASectionProps) {
  return (
    <section 
      id="epa" 
      data-animate 
      className="py-20 bg-gradient-to-br from-[#F6F6F6] to-green-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Environmental Impact & EPA Data
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every year, millions of plastic dog waste bags end up in U.S. landfills — adding to plastic pollution that takes centuries to break down.
          </p>
        </div>

        {/* EPA Information Card */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-green-600 rounded-full flex items-center justify-center">
              <i className="ri-government-line text-3xl text-white"></i>
            </div>
          </div>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            According to the U.S. Environmental Protection Agency (EPA), organic waste in landfills generates methane — a greenhouse gas 25x more potent than CO₂.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`bg-white rounded-2xl p-8 text-center shadow-lg transform transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="w-16 h-16 bg-red-100 text-red-600 mx-auto mb-6 flex items-center justify-center rounded-full">
              <i className="ri-delete-bin-line text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-4">150+</h3>
            <p className="text-gray-600 leading-relaxed">
              million pounds of plastic dog waste bags discarded yearly in the U.S.
            </p>
          </div>

          <div className={`bg-white rounded-2xl p-8 text-center shadow-lg transform transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="w-16 h-16 bg-green-100 text-green-600 mx-auto mb-6 flex items-center justify-center rounded-full">
              <i className="ri-recycle-line text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-4">20%</h3>
            <p className="text-gray-600 leading-relaxed">
              Compostable alternatives can reduce landfill methane by up to 20%.
            </p>
          </div>

          <div className={`bg-white rounded-2xl p-8 text-center shadow-lg transform transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="w-16 h-16 bg-[#F28C28]/20 text-[#F28C28] mx-auto mb-6 flex items-center justify-center rounded-full">
              <i className="ri-community-line text-3xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-4">50,000</h3>
            <p className="text-gray-600 leading-relaxed">
              One HOA converting 10 stations = 50,000 fewer plastic bags entering landfills per year.
            </p>
          </div>
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
