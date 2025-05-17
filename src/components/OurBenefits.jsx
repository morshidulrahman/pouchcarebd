import Button from "@/shared/Button";
import React from "react";

const benefits = [
  {
    number: "01",
    title: "Brilliant Service",
    desc: (
      <>
        We begin by gaining a deep understanding of your business objectives.
        Our talented team of experts create bespoke marketing & SEO strategies
        with everything including on-page SEO, off-page SEO, backlinks and
        beyond to keep you ahead of your competition.
        <br />
        <span className="text-white">
          🔸 Trusted as best SEO company to drive real results.
        </span>
      </>
    ),
  },
  {
    number: "02",
    title: "Flexibility & Adaptability",
    desc: (
      <>
        From incorporating new social media channels into your digital marketing
        strategy to supplanting the focus on a current platform, we help keep
        your brand ahead of the curve.
        <br />
        <span className="text-white">
          🔸 Robust synergy of advertising, ads and innovation.
        </span>
      </>
    ),
  },
  {
    number: "03",
    title: "100% Results Based",
    desc: (
      <>
        Each campaign is research based and conversion oriented. From recording
        user knowledge to improving your search engine optimisation, we refuse
        to stop 100% for your ROI.
        <br />
        <span className="text-white">
          🔸 Data-driven marketing, powered by cutting-edge analytics.
        </span>
      </>
    ),
  },
  {
    number: "04",
    title: "Reach the Right Audience",
    desc: (
      <>
        Using smart targeting and retargeting, we enable you to segment and
        reach potential customers that have already expressed interest in your
        brand.
        <br />
        <span className="text-white">
          🔸 High-yielding adverts that turn interest into sales.
        </span>
      </>
    ),
  },
  {
    number: "05",
    title: "Integrated Innovations",
    desc: (
      <>
        With live analytics, A/B testing, and predictive technology, our
        strategies change when your market does. All of our solutions including
        full-stack web development, app development and web design fit perfectly
        in your full-grown marketing model.
        <br />
        <span className="text-white">
          🔸 Entire digital set up under one roof - PouchCare.
        </span>
      </>
    ),
  },
  {
    number: "06",
    title: "Growth-Driven Mindset",
    desc: (
      <>
        With our insurgent mentality, we are constantly challenging the status
        quo in order to drive sustainable long-term growth for your brand.
        <br />
        <span className="text-white">
          🔸 Ranked as one of the best advertising companies and marketing
          innovators.
        </span>
      </>
    ),
  },
];

const OurBenefits = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <h2 className="text-center text-white text-4xl  capitalize font-bold">
        Our Benefits
      </h2>
      <p className="py-5 text-center text-white mb-16 max-w-2xl mx-auto">
        Enabling growth through expert marketing, performance advertising, smart
        ads, and high-powered web development, app development and SEO services.
      </p>
      <div
        className="container mx-auto flex flex-col md:flex-row gap-12 items-start"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Left Side */}
        <div className="flex-1 mb-10 md:mb-0 max-w-lg">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Step-by-Step Guide to
            <br />
            Marketing Integration
          </h3>
          <p className="text-white mb-6">
            There value of data-driven insights in business, marketing, or
            personal decision-making but also stresses the importance of human
            intuition, creativity, and qualitative factors.
          </p>
          <Button link="/contact" text="Contact Us" />
        </div>
        {/* Right Side */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div key={item.number} className="flex items-start gap-4">
              <span className="bg-white text-orange-500 font-bold rounded-lg px-3 py-1 shadow text-lg min-w-[44px] text-center">
                {item.number}
              </span>
              <div>
                <h4 className="font-semibold text-lg text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
