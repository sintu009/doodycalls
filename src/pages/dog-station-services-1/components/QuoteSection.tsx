export default function QuoteSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#6DBE45] to-[#5da838] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to install dog waste stations that last for years?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get a free consultation and quote for your property. Our team will assess your needs and provide a customized installation plan.
        </p>
        <button className="px-10 py-4 bg-white text-[#6DBE45] text-lg font-bold rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer">
          Request a Free Quote
        </button>
      </div>
    </section>
  );
}
