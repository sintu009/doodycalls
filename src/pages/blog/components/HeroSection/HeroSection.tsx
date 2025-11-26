export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#2E5A51] to-[#1A3A33] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blogs</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Expert insights, tips, and guides for keeping your community clean
            and healthy
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#6DBE45]/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F28C28]/20 rounded-full blur-xl"></div>
    </section>
  );
}
