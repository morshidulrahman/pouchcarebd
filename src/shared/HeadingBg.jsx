import Link from "next/link";
import React from "react";

const HeadingBg = ({ label }) => {
  return (
    <div
      className="w-full h-[320px] md:h-[340px] flex items-center relative"
      style={{
        backgroundImage: "url('/pagetitle.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="container mx-auto relative z-10 px-4">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {label}
          </h1>
          <div className="flex items-center gap-2 text-sm text-orange-400">
            <Link href="/">Home</Link>
            <span className="text-white">›</span>
            <span className="text-white">{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingBg;
