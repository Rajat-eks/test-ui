"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import playstoreBadge from "@/@/component/assets/android-app.svg";
import androidBadge from "@/@/component/assets/play-store.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

const DownloadAppSection = () => {
  return (
    <section className="bg-[#edf3fa] py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20"
      >
        {/* Left Text */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="text-center md:text-left flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a0a23] mb-4 leading-snug">
            Download the <span className="text-blue-600">Loan Plus</span>
            <br />
            app now!
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Get the free Loan Plus app on your phone
          </p>
        </motion.div>

        {/* Right Store Badges */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={androidBadge}
              alt="Download Android App"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={playstoreBadge}
              alt="Get it on Google Play"
              width={180}
              height={60}
              className="cursor-pointer"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DownloadAppSection;
