import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../../../../mocks/blogPosts";

export default function ArticleContent() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Article Not Found
        </h2>
        <a
          href="/blog"
          className="text-[#F28C28] hover:underline cursor-pointer"
        >
          Return to Blog
        </a>
      </div>
    );
  }

  return (
    <article className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#F28C28] hover:text-[#2E5A51] transition-colors mb-8 cursor-pointer group"
        >
          <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform"></i>
          Back to Blog
        </a>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-[#F28C28] text-white px-4 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#2E5A51] mb-6">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <i className="ri-calendar-line"></i>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-user-line"></i>
            <span>{post.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover object-top"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-[#2E5A51] prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-ul:space-y-2
            prose-li:text-gray-700
            prose-strong:text-[#2E5A51] prose-strong:font-bold
            prose-a:text-[#F28C28] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-[#2E5A51] mb-4">
            Share this article
          </h3>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center bg-[#F28C28] text-white rounded-full hover:bg-[#2E5A51] transition-colors cursor-pointer">
              <i className="ri-facebook-fill text-xl"></i>
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#F28C28] text-white rounded-full hover:bg-[#2E5A51] transition-colors cursor-pointer">
              <i className="ri-twitter-fill text-xl"></i>
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#F28C28] text-white rounded-full hover:bg-[#2E5A51] transition-colors cursor-pointer">
              <i className="ri-linkedin-fill text-xl"></i>
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#F28C28] text-white rounded-full hover:bg-[#2E5A51] transition-colors cursor-pointer">
              <i className="ri-mail-fill text-xl"></i>
            </button>
          </div>
        </div>

        {/* Related Articles CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#F5F5F5] to-[#E8F4F8] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#2E5A51] mb-4">
            Want to read more?
          </h3>
          <p className="text-gray-700 mb-6">
            Explore more articles about dog waste management and community care
          </p>
          <a
            href="/blog"
            className="inline-block bg-[#F28C28] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2E5A51] transition-colors cursor-pointer"
          >
            View All Articles
          </a>
        </div>
      </div>
    </article>
  );
}
