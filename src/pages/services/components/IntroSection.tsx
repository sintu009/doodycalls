
import { useState, useEffect, useRef } from 'react';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8 leading-tight">
            Professional Dog Waste Station Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At DoodyCalls of Wake County, we provide comprehensive dog waste station maintenance 
            for HOAs, property managers, and community associations—keeping stations functional, 
            fully stocked, and visually appealing year-round.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: 'ri-calendar-check-line',
            title: 'Weekly Service',
            description: 'Consistent maintenance keeps your community clean'
          },
          {
            icon: 'ri-recycle-line',
            title: 'Eco-Friendly Products',
            description: 'Biodegradable bags and sustainable practices'
          },
          {
            icon: 'ri-phone-line',
            title: '24/7 Support',
            description: 'Always available for urgent needs and questions'
          }
        ].map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <i className={`${feature.icon} text-4xl text-[#2E5A51]`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
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
