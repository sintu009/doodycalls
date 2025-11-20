
interface WhyChooseSectionProps {
  isVisible: boolean;
}

export default function WhyChooseSection({ isVisible }: WhyChooseSectionProps) {
  const benefits = [
    {
      icon: 'ri-calendar-check-line',
      text: 'Reliable weekly maintenance for every station'
    },
    {
      icon: 'ri-user-star-line',
      text: 'Trained, uniformed technicians who care about your community'
    },
    {
      icon: 'ri-file-text-line',
      text: 'Transparent reporting and clear communication'
    },
    {
      icon: 'ri-customer-service-2-line',
      text: 'Prompt response for repairs and special requests'
    }
  ];

  return (
    <section 
      id="why-choose" 
      data-animate 
      className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#2E5A51]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Why Choose <span className="text-[#F28C28]">DoodyCalls of Wake County?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium group-hover:text-[#2E5A51] transition-colors duration-300">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Let DoodyCalls of Wake County handle your dog waste station maintenance — so your community remains clean, safe, and enjoyable for residents and their pets.
            </p>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
