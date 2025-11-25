interface CommunityBenefitsSectionProps {
  isVisible: boolean;
}

export default function CommunityBenefitsSection({
  isVisible,
}: CommunityBenefitsSectionProps) {
  return (
    <section
      id="community-benefits"
      data-animate
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Happy%20families%20and%20residents%20walking%20dogs%20in%20beautiful%20clean%20community%20park%2C%20smiling%20people%2C%20well-maintained%20sidewalks%2C%20green%20grass%2C%20trees%2C%20dog%20waste%20stations%20visible%2C%20welcoming%20neighborhood%20atmosphere%2C%20sunny%20day%2C%20clean%20environment%2C%20community%20pride%2C%20modern%20amenities&width=1920&height=800&seq=community-benefits&orientation=landscape')`,
      }}
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-[#F28C28]/85"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Community Benefits
            </h2>

            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center font-medium">
              Cleaner sidewalks, happier residents, and a more welcoming
              community — that's the DoodyCalls promise. We take care of the
              dirty work so your property can shine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
