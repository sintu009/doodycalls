import { Link } from 'react-router-dom';

interface EnvironmentalSectionProps {
  isVisible: boolean;
}

export default function EnvironmentalSection({ isVisible }: EnvironmentalSectionProps) {
  return (
    <section 
      id="environmental" 
      data-animate 
      className="py-20 bg-[#F6F6F6]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Supporting Cleaner Communities and Greener Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Environmental responsibility is at the heart of everything we do
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Eco-friendly%20aluminum%20recycling%20process%20and%20sustainable%20manufacturing%2C%20green%20technology%20for%20sign%20production%2C%20environmental%20responsibility%20in%20manufacturing%2C%20recyclable%20materials%20and%20eco-friendly%20coating%20processes%2C%20clean%20industrial%20setting&width=600&height=400&seq=environmental&orientation=landscape"
              alt="Sustainable Manufacturing"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-[#2E5A51] mb-6">
              Sustainable Materials &amp; Processes
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <i className="ri-recycle-line text-[#F28C28] text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-[#2E5A51] mb-1">Recyclable Aluminum</h4>
                  <p className="text-gray-600">All signage is made from recyclable aluminum materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-leaf-line text-[#F28C28] text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-[#2E5A51] mb-1">Eco-Friendly Coating</h4>
                  <p className="text-gray-600">Baked enamel finish uses environmentally responsible processes</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-[#F28C28] text-2xl mr-4 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-[#2E5A51] mb-1">Long-Lasting Design</h4>
                  <p className="text-gray-600">Durable construction reduces replacement needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white rounded-2xl p-8 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-[#2E5A51] mb-6">
            Complete Sustainable Pet Waste Management System
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            When paired with DoodyCalls Pet Waste Stations and Pet Waste Bags, these signs create a complete, sustainable pet-waste management system for your community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/products"
              className="bg-[#2E5A51] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1e3d36] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Dog Waste Stations
            </Link>
            <Link 
              to="/products"
              className="bg-[#F28C28] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e07a1f] transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Pet Waste Bags
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}