
import { useState } from 'react';

interface QuoteSectionProps {
  isVisible: boolean;
}

export default function QuoteSection({ isVisible }: QuoteSectionProps) {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.comments.length > 500) {
      alert('Comments must be 500 characters or less.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('communityName', formData.communityName);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('stationCount', formData.stationCount);
      formDataToSubmit.append('contactMethod', formData.contactMethod);
      formDataToSubmit.append('comments', formData.comments);

      const response = await fetch('https://readdy.ai/api/form/submit/dog-station-service-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });

      if (response.ok) {
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
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="quote" 
      data-animate 
      className="relative py-24 bg-gradient-to-br from-white via-[#F6F6F6]/30 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#2E5A51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F28C28]/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            Request a <span className="text-[#F28C28]">Free Site Evaluation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make your community cleaner and more pet-friendly?
            <br />
            Contact us today to schedule a free site evaluation or request a customized service proposal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E5A51]/5 to-[#F28C28]/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-8 text-center">
                  Request a Quote
                </h3>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-check-line text-3xl text-white"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#2E5A51] mb-4">Thank You!</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      One of our friendly team members will reach out within one business day to confirm details and schedule your evaluation.
                    </p>
                  </div>
                ) : (
                  <form id="dog-station-quote-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#2E5A51] mb-2">
                          Name *
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
                          Community or HOA Name *
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
                          Email *
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
