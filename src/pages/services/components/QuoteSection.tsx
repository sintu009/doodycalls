
import { useState, useEffect, useRef } from 'react';

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    communityName: '',
    email: '',
    phone: '',
    stationCount: '',
    contactMethod: 'Email',
    comments: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        communityName: '',
        email: '',
        phone: '',
        stationCount: '',
        contactMethod: 'Email',
        comments: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#2E5A51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F28C28]/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-[#2E5A51]/3 to-[#F28C28]/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Request Your <span className="text-[#F28C28]">Free Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a customized service plan tailored to your community's needs. No obligation, just honest pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E5A51]/5 to-[#F28C28]/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-8 text-center">
                  Get Your Custom Quote
                </h3>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-check-line text-3xl text-white"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#2E5A51] mb-4">Thank You!</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We'll reach out within one business day to confirm details and schedule your evaluation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="communityName" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Community / HOA Name *
                        </label>
                        <input
                          type="text"
                          id="communityName"
                          name="communityName"
                          value={formData.communityName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                          placeholder="Enter community name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                          placeholder="(919) 555-0123"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="stationCount" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Approximate Number of Stations
                        </label>
                        <input
                          type="text"
                          id="stationCount"
                          name="stationCount"
                          value={formData.stationCount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm"
                          placeholder="e.g., 5-10 stations"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactMethod" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Preferred Contact Method
                        </label>
                        <select
                          id="contactMethod"
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm pr-8"
                        >
                          <option value="Email">Email</option>
                          <option value="Phone">Phone</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="comments" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={4}
                        maxLength={500}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F28C28] focus:border-transparent transition-all duration-300 text-sm bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us about your specific needs or questions..."
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {formData.comments.length}/500 characters
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#F28C28] to-[#e07a1f] text-white px-8 py-5 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#F28C28]/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Submitting Request...
                        </span>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-[#2E5A51] mb-8">
                What You'll Get
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: 'ri-map-pin-line',
                    title: 'Free Site Assessment',
                    description: 'Comprehensive evaluation of your property and current station placement'
                  },
                  {
                    icon: 'ri-file-text-line',
                    title: 'Custom Service Plan',
                    description: 'Tailored maintenance schedule based on your community\'s specific needs'
                  },
                  {
                    icon: 'ri-calculator-line',
                    title: 'Transparent Pricing',
                    description: 'Clear, upfront pricing with no hidden fees or surprise charges'
                  },
                  {
                    icon: 'ri-time-line',
                    title: 'Quick Response',
                    description: 'We\'ll contact you within one business day to schedule your evaluation'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <i className={`${benefit.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2E5A51] mb-2 group-hover:text-[#F28C28] transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="bg-gradient-to-r from-[#2E5A51]/10 to-[#F28C28]/10 rounded-2xl p-6 border border-[#2E5A51]/20 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center">
                    <i className="ri-shield-check-line text-xl text-white"></i>
                  </div>
                  <div>
                    <div className="font-bold text-[#2E5A51] text-lg">100% No Obligation</div>
                    <div className="text-gray-600">Free evaluation with honest, transparent pricing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
