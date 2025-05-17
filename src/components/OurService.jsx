import React from "react";
import {
  FileText,
  Rocket,
  BarChart2,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: <FileText className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Digital Marketing & Advertising",
    description:
      "Accelerate your growth with PouchCare’s marketing experts. We create and run ROI focused digital marketing campaigns and design advertising for our brand. It may be social media, Google Ads or influencer messaging, but engagement, visibility and ROI is our aim every time.",
    highlights: [
      "Objective-oriented advertising techniques",
      "Converting targeted ad campaigns",
      "Among the leading marketing companies",
    ],
    link: "#",
  },
  {
    id: "02",
    icon: <BarChart2 className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Search Engine Optimization Services",
    description:
      "Scale the heights of search engine SERPs with top quality SEO services. We focus on both on-page (meta tags, keyword optimization, content management) and off-page (backlink outreach, relationship building, authority development).",
    highlights: [
      "Detailed Keyword research and Strategy",
      "High-quality authority backlinks",
      "Ongoing SEO surveys and performance measurement",
      "Optimization for Local & global SEO",
    ],
    link: "#",
  },
  {
    id: "03",
    icon: <Rocket className="w-12 h-12 text-orange-500 mb-4" />,
    title: "Web Development & Web Design",
    description:
      "Your site is your brand’s digital home. Our team of experts creates designs that are responsive, fast, and aesthetically pleasing for your website and built for SEO and conversions.",
    highlights: [
      "UX/UI Web Design - Tailored to Perfection",
      "Search engine optimized coding and framework",
      "Pages that load quickly and are friendly to mobile devices",
      "Continuing maintenance and upgrading",
    ],
    link: "#",
  },
  {
    id: "04",
    icon: <Smartphone className="w-12 h-12 text-orange-500 mb-4" />,
    title: "App Development",
    description:
      "Extend your digital footprint with exceptional app creation. iOS, Android or anything between – we create mobile experiences that your users will fall in love with, combining effortless design with slick performance and features that convert.",
    highlights: [
      "Apps that are scalable, safe and modern.",
      "Native vs hybrid development choices",
      "User-friendly UI/UX",
      "Included in your digital marketing campaign",
    ],
    link: "#",
  },
];

const OurService = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <div className="container  mx-auto">
        <div
          className="flex flex-col items-center mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h2
            className="flex items-center text-4xl text-white font-semibold  uppercase tracking-wide mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="900"
          >
            Our Services
          </h2>

          <p
            className="text-lg text-white text-center max-w-5xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            PouchCare – Get power in your hands. At PouchCare, we combine
            top-notch digital marketing, pioneering advertising, result-oriented
            SEO, and professional web/app development to take your business to
            the NEXT LEVEL. As a leading marketing company, we customize
            our services to achieve quantifiable results for each client.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="relative bg-black/40 rounded-2xl shadow-md p-8 flex flex-col items-start transition hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={200 + idx * 150}
              data-aos-duration="900"
            >
              <span className="absolute top-6 right-8 text-6xl font-extrabold text-orange-100 select-none opacity-40">
                {service.id}
              </span>
              {service.icon}
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white mb-4">{service.description}</p>

              <a
                href={service.link}
                className="mt-auto  border border-orange-500 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-orange-500 transition flex gap-2"
              >
                Read More{" "}
                <span className="-rotate-45">
                  <ArrowRight />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
