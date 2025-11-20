
interface SummarySectionProps {
  isVisible: boolean;
}

export default function SummarySection({ isVisible }: SummarySectionProps) {
  return (
    <section 
      id="summary" 
      data-animate 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold text-[#2E5A51] mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Consistent Design, Professional Appearance
          </h2>
          
          <div className={`max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p>
              DoodyCalls trash cans are designed to perfectly complement the look of DoodyCalls Dog Waste Stations, ensuring every installation in your community feels cohesive, clean, and intentional.
            </p>
            
            <p>
              These cans don't just offer utility — they enhance community aesthetics and reinforce responsible care standards across every property.
            </p>
          </div>

          <div className={`mt-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <img 
              src="https://readdy.ai/api/search-image?query=A%20beautiful%20community%20common%20area%20showing%20DoodyCalls%20trash%20cans%20and%20dog%20waste%20stations%20installed%20together%2C%20demonstrating%20the%20cohesive%2C%20professional%20design%20consistency.%20The%20scene%20shows%20a%20well-maintained%20HOA%20community%20space%20with%20matching%20aluminum%20equipment%2C%20clean%20landscaping%2C%20walking%20paths%2C%20and%20a%20sense%20of%20organized%20community%20care.%20The%20equipment%20creates%20a%20unified%2C%20intentional%20appearance%20that%20enhances%20the%20overall%20aesthetic%20of%20the%20community%20space.&width=1200&height=600&seq=consistent-design&orientation=landscape"
              alt="DoodyCalls trash cans and waste stations creating consistent community design"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
