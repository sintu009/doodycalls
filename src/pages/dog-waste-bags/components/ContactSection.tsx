
import { useState } from 'react';

interface ContactSectionProps {
  isVisible: boolean;
}

export default function ContactSection({ isVisible }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    communityName: '',
    email: '',
    phone: '',
    stationCount: '',
    contactMethod: 'Email',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/submit/dog-waste-bags-quote', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          communityName: '',
          email: '',
          phone: '',
          stationCount: '',
          contactMethod: 'Email',
          comments: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'comments' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      data-animate 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 90, 81, 0.9), rgba(46, 90, 81, 0.9)), url('https://readdy.ai/api/search-image?query=Beautiful%20green%20community%20park%20with%20walking%20paths%2C%20trees%2C%20and%20clean%20landscaping%2C%20peaceful%20neighborhood%20setting%20with%20well-maintained%20grass%20areas%20and%20family-friendly%20environment%2C%20natural%20lighting&width=1920&height=1080&seq=contact-park-background&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get a Free Quote or Request Samples
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-check-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">Thank You!</h3>
                <p className="text-gray-600 text-lg">
                  Our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-readdy-form id="dog-waste-bags-quote" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                      Community or HOA Name *
                    </label>
                    <input
                      type="text"
                      name="communityName"
                      value={formData.communityName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                      Approximate Number of Stations
                    </label>
                    <input
                      type="text"
                      name="stationCount"
                      value={formData.stationCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="relative">
                      <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm appearance-none pr-8"
                      >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2E5A51] mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2E5A51] focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Tell us about your specific needs..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.comments.length}/500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F28C28] text-white py-4 rounded-xl font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email</p>
                    <a href="mailto:gmann@doodycalls.com" className="text-white text-lg font-semibold hover:text-[#F28C28] transition-colors cursor-pointer">
                      gmann@doodycalls.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Phone</p>
                    <a href="tel:919-634-5383" className="text-white text-lg font-semibold hover:text-[#F28C28] transition-colors cursor-pointer">
                      919-634-5383
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Location</p>
                    <p className="text-white text-lg font-semibold">Raleigh, NC 27617</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <button className="w-full bg-[#F28C28] text-white py-4 rounded-xl font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
