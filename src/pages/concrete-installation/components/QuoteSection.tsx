interface QuoteSectionProps {
  isVisible: boolean;
}

export default function QuoteSection({ isVisible }: QuoteSectionProps) {
  return (
    <section id="quote" data-animate className="py-24 bg-[#F6F6F6]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E5A51]/5 to-[#F28C28]/5"></div>
            
            <div className="relative z-10">
              {/* Quote icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#2E5A51] to-[#F28C28] rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="ri-double-quotes-l text-3xl text-white"></i>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#2E5A51] mb-8">
                Built to Last, Installed Right
              </h2>

              <blockquote className="text-2xl md:text-3xl font-semibold text-[#F28C28] mb-8 italic leading-relaxed">
                "When you choose DoodyCalls, you're choosing a cleaner, safer, and more reliable community standard."
              </blockquote>

              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our concrete installations extend receptacle lifespan and reflect the same professionalism and care that define every DoodyCalls service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}