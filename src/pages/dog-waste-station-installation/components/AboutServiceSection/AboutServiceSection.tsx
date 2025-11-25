interface AboutServiceSectionProps {
  isVisible: boolean;
}

export default function AboutServiceSection({
  isVisible,
}: AboutServiceSectionProps) {
  return (
    <section id="about-service" data-animate className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8 text-center">
            Reliable Dog Waste Station Installation Made Simple
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              When it comes to keeping shared spaces clean, proper waste station
              placement makes all the difference. At DoodyCalls, we help
              communities, HOAs, and property managers install reliable,
              long-lasting dog waste stations that blend perfectly into their
              surroundings. Our team handles everything — from choosing the
              right spot to concrete-secured installation — ensuring long-term
              durability and a clean, inviting environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
