
import { useState, useEffect, useRef } from 'react';

interface ServiceAreaSectionProps {
  isVisible: boolean;
}

export default function ServiceAreaSection({ isVisible }: ServiceAreaSectionProps) {
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

  const serviceAreas = [
    'Raleigh', 'Cary', 'Apex', 'Morrisville', 'Holly Springs',
    'Fuquay-Varina', 'Garner', 'Wake Forest', 'Knightdale', 'Rolesville'
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
            Service <span className="text-[#F28C28]">Areas</span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mr-4">
              <i className="ri-map-pin-line text-xl text-white"></i>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Proudly serving Wake County and surrounding communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-[#2E5A51]/10 to-[#F28C28]/10 rounded-xl p-4 border border-[#2E5A51]/20 hover:shadow-lg hover:scale-105 transition-all duration-300 transform ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-[#2E5A51] font-semibold text-center">
                  {area}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#2E5A51]/10 to-[#F28C28]/10 rounded-2xl p-8 border border-[#2E5A51]/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center">
                <i className="ri-question-line text-2xl text-white"></i>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-[#2E5A51] mb-2">Don't see your area?</div>
                <div className="text-gray-600">Contact us to discuss service availability in your community</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F6F6F6"></path>
        </svg>
      </div>
    </section>
  );
}
