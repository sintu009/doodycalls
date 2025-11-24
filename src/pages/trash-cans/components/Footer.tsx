
export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/9af4d683e8b62c8596a7df5047ceacdc/4be68188bd35ad31af1da334a214f260.jpeg"
              alt="DoodyCalls Logo"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional pet waste management solutions for communities, HOAs, and property managers. 
              Keeping your spaces clean and your residents happy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center hover:bg-[#e07a1f] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="/products" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Waste Stations</a></li>
              <li><a href="/dog-waste-bags" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Waste Bags</a></li>
              <li><a href="/trash-cans" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Trash Cans</a></li>
              <li><a href="/educational-signs" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Customer Signs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F28C28] transition-colors cursor-pointer">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DoodyCalls. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#F28C28] text-sm transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#F28C28] text-sm transition-colors cursor-pointer">Terms of Service</a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
