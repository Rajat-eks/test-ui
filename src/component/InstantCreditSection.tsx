"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import phoneMockup from "@/public/phone-mockup.png"; // ← Replace with your image path

const InstantCreditSection = () => {
  return (
    <section className="bg-[#05062d] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            As quick as{" "}
            <span className="text-blue-500">instant delivery</span>, <br />
            <span className="text-blue-500">instant credit</span> will change <br />
            your life for the better.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Say no to hassle, start your application now!
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold">
            Get Cash in your Bank
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/mobile.png"
            alt="Phone showing ₹75,000 disbursal"
            width={500}
            height={800}
            className="w-full max-w-md mx-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InstantCreditSection;
