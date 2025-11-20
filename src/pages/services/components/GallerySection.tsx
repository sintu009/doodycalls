
import { useState, useEffect, useRef } from 'react';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const galleryImages = [
    {
      src: "https://readdy.ai/api/search-image?query=Professional%20technician%20in%20uniform%20cleaning%20dog%20waste%20station%20in%20HOA%20community%2C%20bright%20sunny%20day%2C%20well-maintained%20station%20with%20fresh%20bags%2C%20clean%20surroundings%2C%20professional%20service%20equipment&width=600&height=400&seq=gallery-1&orientation=landscape",
      alt: "Professional technician maintaining dog waste station",
      title: "Professional Maintenance"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Clean%20modern%20dog%20waste%20station%20in%20beautiful%20HOA%20community%20park%2C%20fresh%20bag%20dispenser%2C%20well-stocked%20supplies%2C%20manicured%20landscaping%2C%20family-friendly%20environment&width=600&height=400&seq=gallery-2&orientation=landscape",
      alt: "Well-maintained dog waste station in community",
      title: "Clean & Stocked Stations"
    },
    {
      src: "https://readdy.ai/api/search-image?query=DoodyCalls%20service%20truck%20parked%20in%20residential%20community%2C%20uniformed%20technician%20with%20cleaning%20supplies%2C%20professional%20equipment%2C%20community%20setting%20with%20houses%20in%20background&width=600&height=400&seq=gallery-3&orientation=landscape",
      alt: "DoodyCalls service vehicle and technician",
      title: "Professional Service Team"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Before%20and%20after%20comparison%20of%20dog%20waste%20station%20maintenance%2C%20dirty%20station%20transformed%20to%20clean%20well-maintained%20station%2C%20professional%20cleaning%20results%2C%20community%20improvement&width=600&height=400&seq=gallery-4&orientation=landscape",
      alt: "Before and after station maintenance",
      title: "Transformation Results"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Happy%20families%20with%20dogs%20walking%20in%20clean%20HOA%20community%20park%2C%20well-maintained%20dog%20waste%20stations%20visible%2C%20children%20playing%20safely%2C%20clean%20environment%2C%20community%20satisfaction&width=600&height=400&seq=gallery-5&orientation=landscape",
      alt: "Happy community with clean environment",
      title: "Happy Communities"
    },
    {
      src: "https://readdy.ai/api/search-image?query=Technician%20taking%20photo%20documentation%20of%20cleaned%20dog%20waste%20station%2C%20tablet%20or%20phone%20showing%20service%20report%2C%20professional%20documentation%20process%2C%20quality%20assurance&width=600&height=400&seq=gallery-6&orientation=landscape",
      alt: "Service documentation and reporting",
      title: "Detailed Reporting"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-[#F6F6F6] via-white to-[#FDF8F3] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#2E5A51]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F28C28]/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
            See Our <span className="text-[#F28C28]">Work</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real communities across Wake County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/50">
                <div className="aspect-w-3 aspect-h-2 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <i className="ri-eye-line text-2xl text-[#2E5A51]"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2E5A51] group-hover:text-[#F28C28] transition-colors duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-2xl"></i>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-2xl"></i>
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
