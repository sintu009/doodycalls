
interface DisclaimerSectionProps {
  isVisible: boolean;
}

export default function DisclaimerSection({ isVisible }: DisclaimerSectionProps) {
  return (
    <section 
      id="disclaimer" 
      data-animate 
      className="py-12 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-truck-line text-white text-xl"></i>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">
                  No shipping charges for landscaping companies or bulk community orders.
                </p>
                <p className="text-gray-600 mt-2">
                  For confirmation or availability, contact DoodyCalls of Wake County directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
