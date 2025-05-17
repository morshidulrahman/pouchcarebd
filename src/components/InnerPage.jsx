import Button from "@/shared/Button";
import React from "react";

const features = [
  {
    icon: <span className="text-orange-400 text-xl mr-2">🌍</span>,
    label: "Multilingual Support",
    desc: "Go global multilingual SEO and content optimization that speaks to your customers in any language.",
  },
  {
    icon: <span className="text-orange-400 text-xl mr-2">⚡</span>,
    label: "Fast Loading Times",
    desc: "You’ll feel the difference from these guys at web development and design – your site will load fast for better user experience and higher search engine rankings.",
  },
  {
    icon: <span className="text-orange-400 text-xl mr-2">✍️</span>,
    label: "Content Optimization for SEO",
    desc: "We create and optimize high performing content with the help of advanced keyword research on-page and off-page SEO to gain visibility and engagement.",
  },
  {
    icon: <span className="text-orange-400 text-xl mr-2">✍️</span>,
    label: "Content Optimization for SEO",
    desc: "Key to Content Optimization for SEO is Keywords.",
  },
];

const stats = [
  {
    value: (
      <span>
        <span className="text-6xl font-bold text-orange-500">10</span>
        <span className="text-3xl text-orange-500 align-top">+</span>
      </span>
    ),
    title: "Product Highlights",
    desc: (
      <>
        Our digital marketing and SEO services offer a comprehensive
        <br />
        <span className="text-gray-400">
          We provide detailed SEO audits that identify areas for improvement on
          your website. From site speed to mobile optimization.
        </span>
      </>
    ),
    icon: <span className="text-3xl text-orange-400">🏆</span>,
  },
  {
    value: (
      <span>
        <span className="text-6xl font-bold text-orange-500">98</span>
        <span className="text-3xl text-orange-500 align-top">%</span>
      </span>
    ),
    title: "Conversion Booster",
    desc: (
      <>
        it’s about ensuring that the traffic you attract is highly relevant.
        <br />
        <span className="text-gray-400">
          Our approach includes optimizing landing pages for user experience,
          ensuring clear calls to action, and streamlining the conversion path.
        </span>
      </>
    ),
    icon: <span className="text-3xl text-orange-400">📈</span>,
  },
  {
    value: (
      <span>
        <span className="text-6xl font-bold text-orange-500">3</span>
        <span className="text-3xl text-orange-500 align-top">k</span>
      </span>
    ),
    title: "Pay Per Click",
    desc: (
      <>
        Accelerating Digital Marketing and SEO Success
        <br />
        <span className="text-gray-400">
          Our PPC campaigns are designed to align with your SEO efforts,
          ensuring both organic and paid traffic work together to maximize
          visibility.
        </span>
      </>
    ),
    icon: <span className="text-3xl text-orange-400">💰</span>,
  },
];

const InnerPage = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="flex items-center text-orange-400 font-semibold mb-2 uppercase tracking-wide">
            <span className="mr-2">🔸</span> Amazing Inner Pages
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            SEO Services for Small Businesses
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl">
            We believe that digital marketing is partnership. We don’t just
            provide potential clients through the steps of how you work and what
            they can expect from partnering
          </p>
        </div>
        {/* Features */}
        <div className="border-b border-[#3a2a1a] pb-6 mb-10">
          <div className="flex flex-wrap gap-6 justify-start">
            {features.map((f, idx) => (
              <div key={idx} className="flex items-center min-w-[220px]">
                {f.icon}
                <span className="text-white font-semibold text-base">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-[#181210] border border-orange-400/30 p-8 flex flex-col items-start shadow transition`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="mb-2">{stat.value}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {stat.title}
              </h3>
              <div className="text-gray-200 text-base">{stat.desc}</div>
            </div>
          ))}
        </div>
        {/* Final Call to Action */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              🚀 Scale up with PouchCare
            </h3>
            <p className="text-gray-300 text-base">
              App Development, SEO, Digital Marketing and a lot more - whatever
              you need, PouchCare has it all. Partner one of the best
              advertising companies and convert those clicks into customers.
            </p>
          </div>
          <Button link="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default InnerPage;
