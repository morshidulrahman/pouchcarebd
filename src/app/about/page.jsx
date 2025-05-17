import About from "@/components/About";
import GetAhead from "@/components/GetAhead";
import OurTeam from "@/components/OurTeam";
import OurWorkingProcess from "@/components/OurWorkingProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeadingBg from "@/shared/HeadingBg";
import React from "react";

const page = () => {
  return (
    <div>
      <HeadingBg label="About Us" />
      <About />
      <WhyChooseUs />
      <OurWorkingProcess />
      <OurTeam />
      <GetAhead />
    </div>
  );
};

export default page;
