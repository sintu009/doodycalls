import Footer from "../../components/footer";
import Header from "../../components/Header";
import ArticleContent from "./components/ArticleContent";

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ArticleContent />
      </main>
      <Footer />
    </div>
  );
}
