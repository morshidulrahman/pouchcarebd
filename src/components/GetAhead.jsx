import React from "react";
import {
  CheckCircle,
  ShieldCheck,
  Rocket,
  BarChart2,
  MonitorSmartphone,
} from "lucide-react";
import Button from "@/shared/Button";

const highlights = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    text: "Maximizing Results with Strategies Services",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-orange-400" />,
    text: "Efficient Marketing for Real Business Growth",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    text: "Smarter Marketing for Sustainable Growth",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-orange-400" />,
    text: "Efficiency Meets in Digital Marketing",
  },
];

const GetAhead = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black min-h-[600px] pt-20 pb-10 px-4 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <div
        className="container mx-auto flex flex-col items-center relative z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center leading-tight mb-4">
          <span className=" px-2 py-1 rounded text-white">
            Stay Ahead of the Competition Smart
          </span>
          <br />
          <span className=" px-2 py-1 rounded text-white">
            Digital Marketing
          </span>
        </h1>
        {/* Subheading */}
        <div className="mt-2 flex items-center justify-center">
          <span className="text-white px-4 py-1 rounded text-base font-medium text-center">
            Social Media Integration Expand your brand's reach through strategic
            social media marketing
          </span>
        </div>
        <Button link="/" text="Get Start for Free"></Button>
        {/* Description */}
        <div className="max-w-2xl mx-auto text-center text-gray-200 py-6">
          At PouchCare, we’re not followers — we’re trendsetters. In addition to
          the conventional marketing and advertising, we offer innovative
          digital marketing services to ensure your brand stays ahead in the
          fast paced digital world. Whether it's SEO, web dev, ads, or full app
          dev we help you win where it counts the most-- online.
        </div>
        {/* Highlights Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 bg-black/70 rounded-2xl py-4 px-2 mb-8 shadow-lg">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2">
              {item.icon}
              <span className="text-white font-medium text-sm  px-2 py-1 rounded">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetAhead;
