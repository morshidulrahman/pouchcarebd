import React from "react";

const steps = [
  {
    icon: <span className="text-2xl mr-2">🔍</span>,
    title: "Discovery & Strategy Formation",
    desc: (
      <>
        All good marketing begins with insight. We go deep into your brand,
        audience and competitive analysis to create a strategy that is in
        alignment with your business objectives.
        <br />
        <span className="text-orange-400">
          ➡ Trusted by Those who Demand the best - Marketing companies
          that deliver!
        </span>
      </>
    ),
  },
  {
    icon: <span className="text-2xl mr-2">🛠️</span>,
    title: "SEO Audit & Website Optimisation",
    desc: (
      <>
        Full SEO Audit of Your Website as part of our SEO on Page and SEO
        technical Services. Our squad pinpoint opportunities and problems in
        structure, speed, and user experience.
        <br />
        <span className="text-orange-400">
          ➡ A part of our advanced website development and website
          design services.
        </span>
      </>
    ),
  },
  {
    icon: <span className="text-2xl mr-2">🔑</span>,
    title: "SEO & Content – Keyword Research & Content Creation",
    desc: (
      <>
        We dig deep into search engine optimisation research to find
        high-impact, relevant keywords. Our professional authors spend time
        producing SEO-friendly content with regard to organic visibility & user
        engagement.
        <br />
        <span className="text-orange-400">
          ➡ This comes with developing powerful backlinks and pay for
          results ads to reach consumers.
        </span>
      </>
    ),
  },
  {
    icon: <span className="text-2xl mr-2">📈</span>,
    title: "Continual Monitoring & Optimisation",
    desc: (
      <>
        We monitor everything from traffic, to conversions, to engagement with
        advanced analytics. Campaigns are fine-tuned all the time to guarantee
        maximum ROI and continued growth.
        <br />
        <span className="text-orange-400">
          ➡ From off-page SEO to paid ads, we optimize for maximum performance.
        </span>
      </>
    ),
  },
];

const OurWorkingProcess = () => {
  return (
    <section
      className="w-full bg-[#181210] pt-14 pb-6 px-4 text-white relative"
      style={{
        background: "radial-gradient(ellipse at top, #2d1808 0%, #181210 80%)",
      }}
    >
      <div className="max-w-7xl mx-auto  gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center justify-center mb-10 md:mb-0">
          <h2 className="text-center text-white text-4xl font-semibold mb-4  uppercase tracking-wide">
            Our Working Process
          </h2>

          <p className="text-gray-300 mb-8 max-w-4xl text-center">
            At the core of our success in digital marketing and SEO is a
            streamlined, results-driven working process designed to meet your
            specific business needs. We combine strategy, creativity, and
            technical expertise.
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-black/40 rounded-xl p-6 shadow"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex-shrink-0 mt-1">{step.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base">{step.desc}</p>
              </div>
            </div>
          ))}
          <div
            className="md:col-span-2 mt-8 bg-black/40 rounded-xl p-6 shadow"
            data-aos="fade-up"
            data-aos-delay={steps.length * 100}
          >
            <h3 className="text-xl font-bold text-white mb-1">
              ✅ Why PouchCare?
            </h3>
            <p className="text-gray-300 text-base">
              You are proud to be among the top advertising companies because,
              thanks to our end-to-end services, from app development to digital
              marketing, we are always on to something. Whether you start up or
              scale up, PouchCare is the growth driver you deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkingProcess;
