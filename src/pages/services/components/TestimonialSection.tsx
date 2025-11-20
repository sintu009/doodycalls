
import { useState, useEffect, useRef } from 'react';

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "DoodyCalls has transformed our community. The stations are always clean and well-maintained. Our residents love the reliable service.",
      author: "Sarah Mitchell",
      title: "HOA President",
      community: "Oakwood Commons",
      rating: 5
    },
    {
      quote: "Professional, reliable, and thorough. The photo reports give us complete transparency into the service quality. Highly recommended!",
      author: "Michael Chen",
      title: "Property Manager",
      community: "Riverside Apartments",
      rating: 5
    },
    {
      quote: "Finally, a service that actually shows up when they say they will. Our dog waste stations have never looked better.",
      author: "Jennifer Davis",
      title: "Community Manager",
      community: "Pine Valley HOA",
      rating: 5
    }
  ];

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#2E5A51]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F28C28]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            What Our <span className="text-[#F28C28]">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cleaner communities. Happier residents. Trusted partnerships.
          </p>
        </div>

        <div className={`relative transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E5A51]/5 to-[#F28C28]/5"></div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-3xl text-[#F28C28] mx-1"></i>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl text-[#2E5A51] font-medium mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="space-y-2">
                <div className="text-xl font-bold text-[#2E5A51]">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-lg text-[#F28C28] font-semibold">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].community}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial
                    ? 'bg-[#F28C28] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-white"></i>
            </div>
            <div className="text-2xl font-bold text-[#2E5A51] mb-2">Fully Insured</div>
            <div className="text-gray-600">Complete liability coverage</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-award-line text-2xl text-white"></i>
            </div>
            <div className="text-2xl font-bold text-[#2E5A51] mb-2">25+ Years</div>
            <div className="text-gray-600">Industry experience</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-heart-line text-2xl text-white"></i>
            </div>
            <div className="text-2xl font-bold text-[#2E5A51] mb-2">Local Team</div>
            <div className="text-gray-600">Wake County focused</div>
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
