import { useState, FormEvent } from 'react';

export default function InstallationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stations: '',
    timeline: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4mlubit20jieso0q3s0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          stations: '',
          timeline: '',
          notes: ''
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
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Request Installation
          </h2>
          <p className="text-xl text-gray-700">
            Ready to get started? Let us know your installation needs and we'll schedule a site visit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl" data-readdy-form>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="inst-name" className="block text-sm font-semibold text-gray-900 mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                id="inst-name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label htmlFor="inst-email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="inst-email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="inst-phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="inst-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label htmlFor="stations" className="block text-sm font-semibold text-gray-900 mb-2">
                Number of Stations *
              </label>
              <select
                id="stations"
                name="stations"
                required
                value={formData.stations}
                onChange={(e) => setFormData({ ...formData, stations: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              >
                <option value="">Select quantity</option>
                <option value="1-3">1-3 stations</option>
                <option value="4-6">4-6 stations</option>
                <option value="7-10">7-10 stations</option>
                <option value="10+">10+ stations</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
              Preferred Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
            >
              <option value="">Select timeline</option>
              <option value="ASAP">As soon as possible</option>
              <option value="1-2 weeks">Within 1-2 weeks</option>
              <option value="2-4 weeks">Within 2-4 weeks</option>
              <option value="1-2 months">Within 1-2 months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              maxLength={500}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
              placeholder="Any specific requirements or questions? (Max 500 characters)"
            ></textarea>
            <p className="text-sm text-gray-600 mt-1">{formData.notes.length}/500 characters</p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Installation request received! We'll contact you shortly to schedule a site visit.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Unable to submit request. Please try again or contact us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Installation Request'}
          </button>
        </form>
      </div>
    </section>
  );
}
