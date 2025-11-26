import { blogPosts } from "../../../../mocks/blogPosts";

export default function BlogGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => (window.location.href = `/blog/${post.slug}`)}
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F28C28] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="ri-calendar-line"></i>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#2E5A51] mb-3 group-hover:text-[#F28C28] transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center text-[#F28C28] font-semibold group-hover:gap-2 transition-all">
                  Read More
                  <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
