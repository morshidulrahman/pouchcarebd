"use client";
import Button from "@/shared/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const missionContent = (
  <ul className="list-disc pl-5 space-y-2 text-base text-gray-200">
    <li>Digital marketing and targeted ads</li>
    <li>SEO (On-page SEO, Off-page SEO, backlinks)</li>
    <li>
      Developing web sites and web applications, web design at the present day.
    </li>
    <li>Development of apps on Android &amp; iOS</li>
    <li>Ad campaigns that convert and deliver ROI for your business</li>
  </ul>
);

const visionContent = (
  <ul className="list-disc pl-5 space-y-2 text-base text-gray-200">
    <li>The number one SEO company with ethical and long lasting results.</li>
    <li>A top advertising company with creative high-performing ads</li>
    <li>
      A digital transformation leader through integrated marketing and
      development process pertinent to your business.
    </li>
    <li>
      A partner that enables businesses to scale and persist digital growth in
      the long term
    </li>
  </ul>
);

const goalContent = (
  <ul className="list-disc pl-5 space-y-2 text-base text-gray-200">
    <li>
      Helping brands succeed on the net with personalised digital approach
    </li>
    <li>Enhance organic traffic, leads and sales with smart SEO and content</li>
    <li>
      Developing quick and secure websites and applications for the mobile web
    </li>
    <li>Adding value with trackable performance and product innovation</li>
  </ul>
);

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section
      className="w-full bg-gradient-to-br from-[#2d1808] via-black to-black py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at top, #a85b1a 0%, #000 80%)",
      }}
    >
      <h2 className="text-center text-white text-4xl  capitalize font-bold">
        About us
      </h2>
      <p className="py-5 text-center text-white mb-16">
        Enabling growth through expert marketing, performance advertising, smart
        ads, and high-powered web development, app development and SEO services.
      </p>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
        {/* Left: Text Content */}
        <div className="flex-1" data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-[50px]">
            PouchCare – Your Reliable Companion for Digital Marketing, SEO &amp;
            Web Solutions
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            PouchCare – A web and digital marketing agency. We combine a
            creative strategy with technical knowledge in web design, digital
            marketing and SEO. We specialise in making quality websites that not
            only look great but also rank, drive leads and sales.
          </p>
          {/* Tabs */}
          <div className="flex space-x-2 mb-6">
            <button
              className={`px-5 py-2 rounded-full font-semibold transition cursor-pointer ${
                activeTab === "mission"
                  ? "bg-orange-500 text-white"
                  : "bg-black/60 text-gray-200 hover:bg-orange-600"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={`px-5 py-2 rounded-full font-semibold transition cursor-pointer ${
                activeTab === "vision"
                  ? "bg-orange-500 text-white"
                  : "bg-black/60 text-gray-200 hover:bg-orange-600"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
            <button
              className={`px-5 py-2 rounded-full font-semibold transition cursor-pointer ${
                activeTab === "goal"
                  ? "bg-orange-500 text-white"
                  : "bg-black/60 text-gray-200 hover:bg-orange-600"
              }`}
              onClick={() => setActiveTab("goal")}
            >
              Company Goal
            </button>
          </div>
          {/* Tab Content */}
          <div className="backdrop-blur-md bg-black/40 rounded-xl p-6 shadow-lg">
            {activeTab === "mission" && missionContent}
            {activeTab === "vision" && visionContent}
            {activeTab === "goal" && goalContent}
          </div>

          {/* Button */}
          <Button text="Get Started Now" link="/contact" />
        </div>
        {/* Right: Image Placeholder */}
        <div
          className="flex-1 flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* Image goes here */}
          <Image
            src="https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/2025/01/inner-homeimg2.png"
            alt="about"
            width={500}
            height={500}
            className="w-full hidden md:flex md:h-[800px] object-cover rounded-2xl"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default About;
