"use client";

import { FaGooglePlay, FaGoogle } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

const CustomersLoveSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-700 text-white py-20 px-4 sm:px-6 md:px-10">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-customers-love.png" // Replace with actual image
          alt="Customers background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Our Customers Love Us
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
        >
          Our customers love us for our swift approvals, personalized financial solutions, and unmatched customer support.
        </motion.p>

        {/* Ratings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 max-w-5xl mx-auto">
          {/* Google */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-1">
              <p className="text-4xl font-bold">3.8</p>
              <p className="text-xl leading-none">★★★★★</p>
            </div>
            <div className="flex items-center gap-1 mt-1 text-sm text-white/80">
              <FaGoogle size={18} />
              <span>On Google</span>
            </div>
          </motion.div>

          {/* Play Store */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-1">
              <p className="text-4xl font-bold">4.2</p>
              <p className="text-xl leading-none">★★★★★</p>
            </div>
            <div className="flex items-center gap-1 mt-1 text-sm text-white/80">
              <FaGooglePlay size={18} />
              <span>On Play Store</span>
            </div>
          </motion.div>

          {/* App Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-1">
              <p className="text-4xl font-bold">1M+</p>
            </div>
            <div className="flex items-center gap-1 mt-1 text-sm text-white/80">
              <FiDownload size={18} />
              <span>App Downloads</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomersLoveSection;
