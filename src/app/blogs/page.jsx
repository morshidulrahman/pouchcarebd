import Blogs from "@/components/blog/Blog";
import HeadingBg from "@/shared/HeadingBg";
import React from "react";

const page = () => {
  return (
    <div>
      <HeadingBg label="Our Blogs" />
      <Blogs />
    </div>
  );
};

export default page;
