"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/@/component/assets/girl.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden px-4 sm:px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold text-sm px-3 py-1 rounded-full mb-4">
            DIGITAL LENDING
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A0A23] leading-tight mb-6">
            Rapid Approval <br /> Personal Loans <br />
            Just a Click Away! <br />
            {/* <span className="relative inline-block">
              Flexible Loans
              </span> */}
          </h1>
              {/* <span className="absolute bottom-1 left-0 w-full   h-2 bg-blue-100 z-[-1]" /> */}

          <p className="text-gray-600 text-lg mb-8">
            Experience instant personal loan approval within a minute, powered by cutting-edge technology.
          </p>

          <button className="bg-[#0A0A23] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#111] transition">
            Contact Us
          </button>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-700">
            <span className="flex items-center gap-2">
              ✅ Instant Loans
            </span>
            <span className="flex items-center gap-2">
              ✅ 100% Digital
            </span>
            <span className="flex items-center gap-2">
              ✅ 24/7 Support
            </span>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden rounded-bl-[150px] rounded-tr-[150px]">
            <Image
              src={hero} // Replace with your image path
              alt="Hero"
              width={550}
              height={550}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Testimonial Card */}
          <div className="absolute bottom-[-30px] left-[-30px] bg-white text-[#0A0A23] max-w-xs md:max-w-sm p-4 rounded-xl shadow-lg text-sm leading-relaxed z-20">
            <p className="mb-3">
              From instant loan approvals to real-time tracking, Kangan
              Consulting made the entire lending journey smooth and transparent.
            </p>
            <p className="font-bold">
              Anjali Desai,{" "}
              <span className="text-[#0A0A23] underline decoration-blue-200">
                Freelancer
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
