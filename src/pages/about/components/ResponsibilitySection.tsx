interface ResponsibilitySectionProps {
  isVisible: boolean;
}

export default function ResponsibilitySection({ isVisible }: ResponsibilitySectionProps) {
  return (
    <section id="responsibility" data-animate className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8">
              Communities Built on Responsibility, Not Routine
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Every HOA, park, and shared property tells a story. Some show frustration — overflowing bins, complaints, neglected areas. Others tell a story of care. That difference is leadership.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We partner with community managers who see cleanliness as respect — for residents, pets, and the planet.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="space-y-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20HOA%20community%20with%20well-maintained%20landscaping%2C%20clean%20sidewalks%20and%20common%20areas%2C%20professional%20property%20management%2C%20beautiful%20residential%20buildings%20with%20manicured%20lawns%20and%20walking%20paths%2C%20bright%20daylight%20photography&width=400&height=300&seq=hoa-community&orientation=landscape"
                alt="HOA Community"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20public%20park%20with%20clean%20walking%20trails%2C%20well-maintained%20grass%20areas%2C%20families%20enjoying%20outdoor%20activities%2C%20professional%20landscaping%20with%20trees%20and%20benches%2C%20clear%20blue%20sky%20and%20natural%20lighting&width=400&height=300&seq=public-park&orientation=landscape"
                alt="Public Park"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20apartment%20complex%20with%20pristine%20common%20areas%2C%20clean%20outdoor%20spaces%2C%20professional%20landscaping%2C%20residents%20walking%20dogs%20on%20clean%20pathways%2C%20well-maintained%20property%20with%20contemporary%20architecture&width=400&height=300&seq=apartment-complex&orientation=landscape"
                alt="Apartment Complex"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=Community%20recreational%20area%20with%20clean%20facilities%2C%20well-maintained%20sports%20fields%2C%20families%20and%20pets%20enjoying%20clean%20outdoor%20spaces%2C%20professional%20groundskeeping%2C%20bright%20natural%20lighting&width=400&height=300&seq=recreation-area&orientation=landscape"
                alt="Recreation Area"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}