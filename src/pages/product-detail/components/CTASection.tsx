interface CTASectionProps {
  isVisible: boolean;
}

export default function CTASection({ isVisible }: CTASectionProps) {
  return (
    <section 
      id="cta" 
      data-animate 
      className="py-20 bg-[#2E5A51]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Equip Your Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of HOAs, parks, and municipalities that trust the Commander™ for cleaner, happier spaces.
          </p>
          <button className="bg-[#F28C28] text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-[#e07a1f] transform hover:scale-105 transition-all duration-300 shadow-2xl whitespace-nowrap cursor-pointer">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}