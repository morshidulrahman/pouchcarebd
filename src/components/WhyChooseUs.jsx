import React from "react";
import { TrendingUp, Target, BarChart2, Rocket } from "lucide-react";
import Button from "@/shared/Button";

const stats = [
  {
    value: "60M+",
    label: "Organic Impressions",
    description:
      "All of this is delivered through professional search engine optimisation and quality back links to ensure true visibility and exposure.",
    icon: <TrendingUp className="w-8 h-8 text-orange-500 mb-2" />,
  },
  {
    value: "80%",
    label: "Strategy Alignment",
    description:
      "We plan and design our marketing and advertising around your specific business goals so that you can target better, engage better, and get better results.",
    icon: <Target className="w-8 h-8 text-orange-500 mb-2" />,
  },
  {
    value: "95%",
    label: "SEO Accuracy",
    description:
      "Every spend in an SEO campaign is monitored, re-optimised, refined and streamlined from rankings to conversion – we leave no stone un-turned.",
    icon: <BarChart2 className="w-8 h-8 text-orange-500 mb-2" />,
  },
  {
    value: "75K+",
    label: "Successful Campaigns",
    description:
      "Whether it is web design, web development, app development or delivering high performance ads, we have helped thousands of customers to punch above their weight.",
    icon: <Rocket className="w-8 h-8 text-orange-500 mb-2" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <h2 className=" text-white text-center font-semibold text-4xl  uppercase tracking-wide md:mb-20 mb-12">
        Why Choose PouchCare
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Left Content */}
        <div
          className="max-w-xl mb-12 md:mb-0 md:items-start flex flex-col items-center justify-center text-center md:text-start"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Where the Rubber Meets the Road Innovation and Measurable Marketing
            Results
          </h3>
          <p className="text-gray-300 mb-4">
            We&nbsp;combine data-driven methodologies with human creativity to
            deliver amazing results in all forms of digital marketing,
            advertising, SEO, and complex web solutions.
          </p>
          <p className="text-gray-300 mb-8">
            We know success isn’t only&nbsp;numbers, but substantial growth.
            That’s why we engineer bespoke solutions that blend the&nbsp;art and
            science of analytics with strategic creativity.
          </p>

          <Button text="Contact Us" link="/contact" />
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start bg-black/40 rounded-xl p-6 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              {stat.icon}
              <span className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </span>
              <span className="text-orange-400 font-semibold mb-1">
                {stat.label}
              </span>
              <span className="text-gray-300 text-sm">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
