export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=happy%20community%20residents%20walking%20dogs%20in%20clean%20beautiful%20park%20with%20green%20grass%20and%20trees%2C%20families%20enjoying%20outdoor%20space%2C%20bright%20sunny%20day%2C%20professional%20photography&width=1920&height=800&seq=cta1&orientation=landscape"
          alt="Clean community with happy residents"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-900/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Cleaner sidewalks, happier residents, and a community everyone loves
        </h2>
        <p className="text-xl text-white/95 mb-10 leading-relaxed">
          <span className="text-green-300 font-semibold">That's our promise.</span>
        </p>
        <a
          href="#quote"
          className="inline-block bg-white text-teal-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl whitespace-nowrap"
        >
          Get Your Free Quote
        </a>
      </div>
    </section>
  );
}
