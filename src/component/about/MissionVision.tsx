"use client";

import { FaEye, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/your-image-path.jpg')" }} // Replace with actual image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center md:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          Together, We Drive Success and Impact
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl mb-10"
        >
          We aim higher every day for the sake of our users satisfaction
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-black rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#e5efff] text-blue-600 p-3 rounded-full">
                <FaShieldAlt className="text-xl" />
              </div>
              <h3 className="text-xl font-bold uppercase">Mission</h3>
            </div>
            <p className="text-base leading-relaxed">
              Empowering aspirations through accessible and bespoke financial solutions, 
              we envision a world where financial freedom is attainable for all, 
              fostering a future of limitless possibilities and enduring prosperity
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-black rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#e5efff] text-blue-600 p-3 rounded-full">
                <FaEye className="text-xl" />
              </div>
              <h3 className="text-xl font-bold uppercase">Vision</h3>
            </div>
            <p className="text-base leading-relaxed">
              We are dedicated to helping people achieve financial success with clear and 
              client-friendly personal loans. Our mission is to support individuals in reaching 
              their life goals, building a path of trust, quality, and positive growth
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
