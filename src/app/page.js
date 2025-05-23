import About from "@/components/About";
import Footer from "@/components/Footer";
import GetAhead from "@/components/GetAhead";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurBenefits from "@/components/OurBenefits";
import OurService from "@/components/OurService";
import OurStrategy from "@/components/OurStrategy";
import OurTeam from "@/components/OurTeam";
import OurWorkingProcess from "@/components/OurWorkingProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChooseUs />
      <OurService />
      <OurStrategy />
      <OurWorkingProcess />
      <OurBenefits />
      <OurTeam />
      <GetAhead />
    </div>
  );
};

export default page;
