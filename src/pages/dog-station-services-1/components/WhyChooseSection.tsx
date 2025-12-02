export default function WhyChooseSection() {
  const benefits = [
    {
      icon: "ri-time-line",
      title: "Durable Installation",
      description: "Concrete-secured stations that withstand years of use",
    },
    {
      icon: "ri-community-line",
      title: "All Community Sizes",
      description: "Perfect for small parks to large HOA communities",
    },
    {
      icon: "ri-team-line",
      title: "Friendly Team",
      description: "Experienced, knowledgeable crew you can trust",
    },
    {
      icon: "ri-star-line",
      title: "Beautiful Properties",
      description: "Keeps your property clean and well-maintained",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F28C28] mb-4">
            Why Choose DoodyCalls
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by communities across the region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#6DBE45] rounded-full flex items-center justify-center mb-6">
                <i className={`${benefit.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#F28C28] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[#F28C28] mb-4">
                Community Benefits
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Cleaner sidewalks, happier residents, and a more welcoming
                community — that's the DoodyCalls promise. We take care of the
                dirty work so your property can shine.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-check-line text-2xl text-[#6DBE45] mr-3 mt-1"></i>
                  <span className="text-gray-700">
                    <strong>Happier Residents:</strong> Well-maintained spaces
                    attract quality tenants and keep residents satisfied
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-2xl text-[#6DBE45] mr-3 mt-1"></i>
                  <span className="text-gray-700">
                    <strong>Cleaner Walkways:</strong> Strategically placed
                    stations encourage responsible pet ownership
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-2xl text-[#6DBE45] mr-3 mt-1"></i>
                  <span className="text-gray-700">
                    <strong>Welcoming Environment:</strong> Create a positive
                    first impression for visitors and potential residents
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://readdy.ai/api/search-image?query=beautiful%20clean%20community%20park%20with%20walking%20paths%20green%20grass%20trees%20sunny%20day%20professional%20photography%20modern%20landscaping%20well%20maintained%20outdoor%20space%20peaceful%20environment%20residential%20area%20with%20sidewalks&width=300&height=300&seq=comm1&orientation=squarish"
                  alt="Clean community"
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                />
                <img
                  src="https://readdy.ai/api/search-image?query=happy%20family%20walking%20dog%20in%20park%20golden%20retriever%20on%20leash%20smiling%20people%20outdoor%20recreation%20community%20lifestyle%20sunny%20day%20green%20grass%20trees%20professional%20photography&width=300&height=300&seq=comm2&orientation=squarish"
                  alt="Happy residents"
                  className="w-full h-48 object-cover rounded-2xl shadow-md mt-8"
                />
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20dog%20waste%20station%20installed%20in%20park%20green%20metal%20post%20waste%20bag%20dispenser%20clean%20maintained%20community%20amenity%20professional%20installation%20outdoor%20setting&width=300&height=300&seq=comm3&orientation=squarish"
                  alt="Waste station"
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                />
                <img
                  src="https://readdy.ai/api/search-image?query=clean%20sidewalk%20pathway%20in%20residential%20community%20well%20maintained%20landscaping%20green%20grass%20trees%20modern%20neighborhood%20professional%20property%20management%20outdoor%20space&width=300&height=300&seq=comm4&orientation=squarish"
                  alt="Clean pathways"
                  className="w-full h-48 object-cover rounded-2xl shadow-md mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
