interface RootsSectionProps {
  isVisible: boolean;
}

export default function RootsSection({ isVisible }: RootsSectionProps) {
  return (
    <section 
      id="roots" 
      data-animate 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 90, 81, 0.8), rgba(46, 90, 81, 0.8)), url('https://readdy.ai/api/search-image?query=Aerial%20view%20of%20North%20Carolina%20landscape%20with%20rolling%20hills%2C%20forests%2C%20and%20communities%2C%20beautiful%20natural%20scenery%20with%20small%20towns%20and%20cities%2C%20professional%20aerial%20photography%20showing%20the%20diverse%20geography%20of%20Wake%20County%20and%20surrounding%20areas&width=1920&height=800&seq=nc-landscape&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center text-white transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            North Carolina Roots.<br />
            <span className="text-[#F28C28]">National Strength.</span><br />
            Local Heart.
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed">
              As part of a trusted national brand, DoodyCalls of Wake County blends national expertise with North Carolina values — care for the land, pride in neighborhoods, and environmental responsibility. From Raleigh to Durham to Johnston County, we create cleaner, safer spaces for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}