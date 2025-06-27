"use client";

import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const RepeatSatisfiedUsersSection = () => {
  return (
    <section className="bg-[#f5f9fc] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-0 md:gap-0">
        {/* Left Count */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center space-x-2 md:space-x-2">
            <h3 className="text-4xl font-bold text-blue-600">100k+</h3>
            <p className="text-base font-semibold text-[#0a0a23] whitespace-nowrap text-xl">Repeat User</p>
          </div>
        </motion.div>

        {/* Center Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-24 my-4 md:my-0 flex items-center justify-center bg-[#e8f1fb] rounded-full"
        >
          <FaUsers className="text-[#0a0a23] text-3xl" />
        </motion.div>

        {/* Right Count */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center space-x-2 md:space-x-2">
            <h3 className="text-4xl font-bold text-blue-600">50k+</h3>
            <p className="text-base font-semibold text-[#0a0a23] whitespace-nowrap text-xl">Satisfied User</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RepeatSatisfiedUsersSection;
