"use client";

import Image from "next/image";
import  about from "@/@/component/assets/about.jpg"

const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={about}
          alt="About Loan Plus"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-7xl w-full px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            About <br /> Loan Plus
          </h1>
        </div>

        {/* Breadcrumb Button */}
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl px-5 py-3 text-sm sm:text-base font-medium shadow-lg">
          Loan Plus <span className="mx-2">{">"}</span> About Us
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
