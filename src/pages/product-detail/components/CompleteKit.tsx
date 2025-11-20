interface CompleteKitProps {
  isVisible: boolean;
}

export default function CompleteKit({ isVisible }: CompleteKitProps) {
  const includes = [
    { icon: "ri-inbox-line", text: "Dispenser (header or roll bag)" },
    { icon: "ri-delete-bin-line", text: "10-gallon receptacle with oversized lid" },
    { icon: "ri-road-map-line", text: "Signage" },
    { icon: "ri-building-line", text: "Two-piece 8 ft. square post" },
    { icon: "ri-tools-line", text: "Hardware and installation guide" }
  ];

  const features = [
    { icon: "ri-tools-fill", text: "Easy Assembly" },
    { icon: "ri-checkbox-circle-fill", text: "All Parts Included" },
    { icon: "ri-shield-check-fill", text: "Secure Packaging" }
  ];

  return (
    <section 
      id="kit" 
      data-animate 
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Everything You Need — in One Box
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each Commander™ kit is individually boxed and securely packed in a double-walled durable box to ensure you receive a complete, undamaged station.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#2E5A51] mb-6">Kit Includes:</h3>
              <div className="space-y-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <i className={`${item.icon} text-[#F28C28] text-2xl`}></i>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <img 
              src="https://readdy.ai/api/search-image?query=A%20neatly%20organized%20product%20kit%20box%20showing%20pet%20waste%20station%20components%20laid%20out%20professionally%20including%20aluminum%20dispenser%2C%20waste%20bin%20with%20lid%2C%20signage%2C%20square%20post%20sections%2C%20and%20installation%20hardware.%20The%20image%20has%20a%20clean%20white%20background%20with%20all%20parts%20clearly%20visible%20and%20arranged%20in%20an%20organized%20manner%2C%20conveying%20quality%20and%20completeness%20with%20professional%20product%20photography%20lighting.&width=800&height=800&seq=commander-kit-contents&orientation=squarish"
              alt="Commander Kit Contents"
              className="w-full rounded-2xl shadow-2xl"
            />
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <i className={`${feature.icon} text-[#2E5A51] text-3xl`}></i>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}