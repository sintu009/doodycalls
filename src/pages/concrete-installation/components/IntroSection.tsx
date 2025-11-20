
interface IntroSectionProps {
  isVisible: boolean;
}

export default function IntroSection({ isVisible }: IntroSectionProps) {
  return (
    <section id="intro" data-animate className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main Heading */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E5A51] rounded-full mb-6">
              <i className="ri-hammer-line text-2xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
              Built for <span className="text-[#F28C28]">Durability</span>
            </h2>
            <div className="w-24 h-1 bg-[#F28C28] mx-auto"></div>
          </div>

          {/* Three Key Points Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Durability Card */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#1e3d36] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-shield-check-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#2E5A51] mb-4">Durability First</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize durability, stability, and long-term performance in every installation.
              </p>
            </div>

            {/* Security Card */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F28C28] to-[#e07a1f] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-lock-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#2E5A51] mb-4">Secure & Upright</h3>
              <p className="text-gray-600 leading-relaxed">
                Our concrete installation method ensures stations stay secure, upright, and professional-looking.
              </p>
            </div>

            {/* Weather Resistance Card */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#1e3d36] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-cloud-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-[#2E5A51] mb-4">Weather Resistant</h3>
              <p className="text-gray-600 leading-relaxed">
                Built to withstand challenging weather and soil conditions year-round.
              </p>
            </div>
          </div>

          {/* Bottom Statement with Background */}
          <div className="relative">
            <div className="bg-gradient-to-r from-[#F6F6F6] to-white rounded-3xl p-12 border-l-4 border-[#F28C28]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F28C28] rounded-full">
                    <i className="ri-tools-line text-2xl text-white"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#2E5A51] mb-4">
                    Industry-Best Practices
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Whether it's a new install, relocation, or repair, our team uses industry-best practices to ensure your receptacles <strong className="text-[#2E5A51]">stand the test of time</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
