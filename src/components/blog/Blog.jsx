import React from "react";

const blogs = [
  {
    title: "The Future of Business: Trends to Watch in 2025",
    image:
      "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/service-img-1.webp",
    link: "#",
  },
  {
    title: "SEO and Content Marketing Work Together",
    image:
      "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/service-img-2.webp",
    link: "#",
  },
  {
    title: "Future SEO and Digital Marketing Tactics for 2025",
    image:
      "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/service-img-3.webp",
    link: "#",
  },
  {
    title: "Why Every Business Needs a Digital Strategy",
    image:
      "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/service-img-4.webp",
    link: "#",
  },
  {
    title: "Power of Digital Marketing: Strategies That Work",
    image:
      "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/service-img-5.webp",
    link: "#",
  },
  {
    title: "Top 3 Success Stories Showcase Our Expertise",
    image:
      "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/service-img-6.webp",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col border border-[#2a1c17]"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
              draggable={false}
            />
            <div className="flex-1 flex flex-col p-5">
              <h3 className="text-lg font-semibold text-white mb-3">
                {blog.title}
              </h3>
              <a
                href={blog.link}
                className="mt-auto text-orange-600 font-semibold flex items-center gap-1 hover:underline"
              >
                Learn More <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
