import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Button from "@/shared/Button";

const strategyPoints = [
  "Research & Analysis in Depth: We get our hands dirty in your business, industry dynamics, and competition to uncover discrete growth opportunities. From SEO marketing research to market analysis, each of these is timely.",
  "Tailored Plan According to Your Needs: No cookie-cutter plans here. We develop customized plans tailored to your needs, on and off-site or, implement an impressive dynamic digital marketing strategy.",
  "Results-Focused Implementation: We systematically monitor, test and improve campaigns — from advertising and ads to web design and SEO backlinks — to fuel long-term growth and ROI.",
];

const coreAreas = [
  {
    number: "01.",
    title: "Social media marketing.",
    desc: "Social media signals, such as shares and likes, contribute to SEO by driving traffic to your site and enhancing brand.",
  },
  {
    number: "02.",
    title: "Online advertising marketing.",
    desc: "We ensure that every ad click leads to valuable conversions. Online advertising also helps gather.",
  },
  {
    number: "03.",
    title: "SEO marketing research.",
    desc: "SEO marketing research is the cornerstone of any successful digital marketing and SEO strategy.",
  },
];

const OurStrategy = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <h2
        className="text-center text-4xl text-white font-semibold uppercase tracking-wide mb-4"
        data-aos="fade-up"
      >
        Our Strategy
      </h2>
      <p
        className="text-white mb-16 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        Enabling growth through expert marketing, performance advertising, smart
        ads, and high-powered web development, app development and SEO services.
      </p>
      <div
        className="container mx-auto flex flex-col md:flex-row gap-12 items-start"
        data-aos="fade-right"
      >
        {/* Left Side */}
        <div className="flex-1 mb-10 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Strategic Marketing for
            <br />
            Time and Your Growth
          </h3>
          <p className="text-gray-300 mb-6">
            Time is valuable, and growth is essential. That’s why our strategic
            marketing approach is crafted to fit your unique needs, allowing you
            to focus on what truly matters while we handle the rest. We
            understand that every business results.
          </p>
          <ul className="mb-8 space-y-3">
            {strategyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-orange-400 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button link={"/services"} text="Learn More"></Button>
        </div>
        {/* Right Side */}
        <div className="flex-1 w-full" data-aos="fade-left">
          <div className="bg-black rounded-3xl p-8 md:p-10 shadow-lg w-full">
            {coreAreas.map((area, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <div className="flex items-center mb-2">
                  <span className="text-orange-400 font-bold text-lg mr-2">
                    {area.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {area.title}
                  </span>
                </div>
                <p className="text-gray-300 text-base pl-8">{area.desc}</p>
                {idx < coreAreas.length - 1 && (
                  <hr className="my-4 border-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrategy;
