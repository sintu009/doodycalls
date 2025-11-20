
import { useState, useEffect, useRef } from 'react';

interface ContactSectionProps {
  isVisible: boolean;
}

export default function ContactSection({ isVisible }: ContactSectionProps) {
  const [internalVisible, setInternalVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInternalVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const visible = isVisible || internalVisible;

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#2E5A51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F28C28]/5 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6 leading-tight">
              Prefer to <span className="text-[#F28C28]">Talk Now?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're happy to help answer your questions and discuss your community's specific needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-phone-line text-xl text-white"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2E5A51] mb-1">Call Us</div>
                  <a href="tel:919-634-5383" className="text-2xl font-bold text-[#F28C28] hover:text-[#e07a1f] transition-colors duration-300">
                    919-634-5383
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-mail-line text-xl text-white"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2E5A51] mb-1">Email Us</div>
                  <a href="mailto:gmann@doodycalls.com" className="text-2xl font-bold text-[#F28C28] hover:text-[#e07a1f] transition-colors duration-300">
                    gmann@doodycalls.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-map-pin-line text-xl text-white"></i>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2E5A51] mb-1">Location</div>
                  <div className="text-2xl font-bold text-[#2E5A51]">
                    Raleigh, NC 27617
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`transform transition-all duration-1000 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E5A51]/5 to-[#F28C28]/5"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-customer-service-2-line text-3xl text-white"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">
                  Ready to Get Started?
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Schedule your free site evaluation and discover how we can help keep your community clean and welcoming.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#F28C28]/50 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Request Free Evaluation
                  </button>
                  
                  <button className="w-full border-2 border-[#2E5A51] text-[#2E5A51] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#2E5A51] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Email Our Team
                  </button>
                </div>
              </div>
            </div>
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
