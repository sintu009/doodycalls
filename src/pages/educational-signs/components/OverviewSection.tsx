interface OverviewSectionProps {
  isVisible: boolean;
}

export default function OverviewSection({ isVisible }: OverviewSectionProps) {
  return (
    <section 
      id="overview" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
            Cleaner Communities Start with Education
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            DoodyCalls of Wake County provides Educational Dog Waste Ordinance Signs designed to remind residents and visitors of local "Pooper Scooper" laws. These signs display ordinance numbers, fines, and contact information — helping property managers and HOAs reduce pet waste issues and promote environmental care.
          </p>
          
          <div className="bg-[#F6F6F6] rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <i className="ri-information-line text-[#2E5A51] text-2xl mr-3"></i>
              <span className="text-[#2E5A51] font-semibold text-lg">Exclusively Provided</span>
            </div>
            <p className="text-gray-700 text-lg">
              All educational signs are exclusively provided by <strong>GreenWalks, LLC</strong> – DBA DoodyCalls of Wake County.
            </p>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20educational%20dog%20waste%20ordinance%20sign%20mounted%20on%20post%20in%20community%20setting%2C%20clear%20text%20displaying%20local%20ordinance%20information%20and%20fines%2C%20teal%20green%20and%20orange%20color%20scheme%2C%20weather-resistant%20aluminum%20construction%2C%20clean%20typography%20and%20modern%20design&width=600&height=800&seq=overview-sign&orientation=portrait"
              alt="Educational Dog Waste Ordinance Sign"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#F28C28] text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="ri-book-open-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-2">Clear Communication</h3>
                <p className="text-gray-600">Inform residents about local pet waste laws and regulations with professional signage.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#F28C28] text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="ri-shield-check-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-2">Legal Compliance</h3>
                <p className="text-gray-600">Display ordinance numbers and fine amounts to ensure community compliance.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#F28C28] text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="ri-community-line text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2E5A51] mb-2">Community Health</h3>
                <p className="text-gray-600">Promote environmental responsibility and maintain clean, healthy shared spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}