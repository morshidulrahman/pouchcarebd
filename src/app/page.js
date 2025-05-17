import About from "@/components/About";
import Footer from "@/components/Footer";
import GetAhead from "@/components/GetAhead";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurBenefits from "@/components/OurBenefits";
import OurService from "@/components/OurService";
import OurStrategy from "@/components/OurStrategy";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <OurService />
      <OurStrategy />
      <OurBenefits />
      <GetAhead />
      <Footer />
    </div>
  );
};

export default page;
