import InnerPage from "@/components/InnerPage";
import OurService from "@/components/OurService";
import OurWorkingProcess from "@/components/OurWorkingProcess";
import HeadingBg from "@/shared/HeadingBg";
import React from "react";

const page = () => {
  return (
    <>
      <HeadingBg label="Our Services" />
      <OurService />
      <OurWorkingProcess />
      <InnerPage />
    </>
  );
};

export default page;
