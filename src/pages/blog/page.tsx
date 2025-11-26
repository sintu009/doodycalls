import Header from "../../components/Header";
import Footer from "../../components/footer";
import BlogGrid from "./components/BlogGrid";
import HeroSection from "./components/HeroSection";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
