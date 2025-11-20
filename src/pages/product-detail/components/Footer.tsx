export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DoodyCalls of Wake County</h3>
            <p className="text-gray-400 mb-4">
              Professional pet waste management services for cleaner, happier communities across North Carolina.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                (919) 555-0123
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                gmann@doodycalls.com
              </p>
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                Wake County, North Carolina
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#F28C28] transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#F28C28] transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DoodyCalls of Wake County. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}