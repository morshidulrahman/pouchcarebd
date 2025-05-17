import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center bg-[#100A08] overflow-hidden"
      style={{
        backgroundImage: "url('/pouchbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto gap-6 flex flex-col lg:flex-row items-center justify-between py-16 px-6 z-10">
        {/* Left Content */}
        <div
          className="max-w-2xl text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Your Marketing &amp; SEO Experts at&nbsp;PouchCare
            <br className="hidden sm:block" />
            <span className="text-orange-400">- Grow Your Business</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-8">
            At PouchCare we do smarter digital marketing, creative web design
            and result driven search engine optimisation that makes your
            business fulfil its&nbsp;potential. Whether you’re looking for
            on-page&nbsp;SEO, off-page SEO, or high-quality backlinks, you can
            be sure we can provide you with the organic growth that will help to
            make your content rank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-3xl transition duration-200 w-full sm:w-auto">
              Get a Free Consultation
            </button>
            <button className="bg-transparent text-white font-semibold py-3 px-6 rounded-3xl border border-orange-500 transition duration-200 w-full sm:w-auto">
              Boost My Online Presence
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div
          className="mt-10 md:mt-0 md:ml-12 flex-shrink-0 w-full md:w-auto flex justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src="/bg-img-seo-slide.png"
            alt="Hero"
            className="rounded-lg shadow-lg max-w-xs md:max-w-2xl w-full h-auto object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
