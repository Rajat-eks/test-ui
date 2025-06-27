"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import image1 from "@/@/component/assets/image1.svg";
import image2 from "@/@/component/assets/image2.svg"
// import officeImg1 from "@/public/images/office1.jpg"; // Replace with your image
// import officeImg2 from "@/public/images/office2.jpg"; // Replace with your image
import Link from "next/link";

const CompanyIntroSection = () => {
  return (
    <section className="bg-[#f5f9ff] py-16 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a23] leading-tight">
            Few words about our <br />
            <span className="text-[#0a0a23]">Company</span>
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            We&rsquo;re transforming personal loans with personalized solutions and expert support to guide your financial journey.
          </p>

          <Link href="/contact">
            <button className="mt-8 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-full shadow transition duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Top Badge */}
            <motion.div
              className="absolute -top-6 -left-6 bg-blue-600 text-white text-lg font-bold rounded-2xl px-6 py-4 z-10 shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>200+<br /><span className="text-sm font-normal">Membered Team</span></p>
            </motion.div>

            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image src={image1} alt="Office 1" className="object-cover w-full h-auto" />
            </div>

            {/* Secondary Image */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image src={image2} alt="Office 2" className="object-cover w-full h-auto" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntroSection;
