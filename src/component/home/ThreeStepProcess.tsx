"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Online Application",
    description:
      "A completely handheld application to serve you. Start and complete your application anywhere, anytime and get instant support at all times.",
  },
  {
    number: "02",
    title: "Instant Approval",
    description:
      "Why worry when we are here? Get instant approval on all your application so that you can finance yourself as soon as you wish to.",
  },
  {
    number: "03",
    title: "Cash-in-Bank in Minutes",
    description:
      "Quick disbursal so that you don't have to wait! Your finances are in order the minute your application is completed.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
    },
  }),
};

const ThreeStepProcess = () => {
  return (
    <section className="bg-[#f8fbfd] px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#0a0a23] mb-4 text-center md:text-left"
        >
          As easy as 1, 2, 3
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-800 font-medium mb-12 text-center md:text-left"
        >
          Experience instant personal loan approval within a minute, powered by
          cutting-edge technology.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative group p-[1px] rounded-xl"
            >
              {/* Neon Border Glow Behind Card */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#c7d2fe] via-[#e0f2fe] to-[#c7d2fe] blur-2xl opacity-70 group-hover:opacity-90 transition duration-500 z-0"></div>

              {/* Card Content */}
              <div className="relative z-10 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-start text-left">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0a0a23] text-white text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#0a0a23] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center md:text-left"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
            Download Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
