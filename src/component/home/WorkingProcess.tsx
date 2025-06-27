"use client";

import { motion } from "framer-motion";
import { FaDesktop, FaFileSignature, FaMoneyCheckAlt, FaHandsHelping } from "react-icons/fa";

const processSteps = [
  {
    step: "01",
    title: "Apply Online",
    icon: <FaDesktop size={28} className="text-white" />,
    desc: "The first step in obtaining any loan is to complete an application and submit the required documents.",
  },
  {
    step: "02",
    title: "Approval in minutes",
    icon: <FaFileSignature size={28} className="text-white" />,
    desc: "Once the documents are received our credit team checks and analyses them to determine the creditworthiness of the customers using data-driven algorithms",
  },
  {
    step: "03",
    title: "Disbursal Within Minutes",
    icon: <FaMoneyCheckAlt size={28} className="text-white" />,
    desc: "Immediately after sanction your loan will be disbursed within minutes",
  },
  {
    step: "04",
    title: "Continuous Assistance",
    icon: <FaHandsHelping size={28} className="text-white" />,
    desc: "We place a higher priority on your financial well-being than loan repayment. We also promise to be there for you at all time to help you through any financial difficulties you may encounter.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkingProcess = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
        Our working process
      </h2>

      <motion.div
        className="relative grid gap-12 md:grid-cols-4 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center relative"
          >
            <div className="relative z-10">
              <div className="bg-blue-500 w-20 h-20 flex items-center justify-center rounded-full mb-4">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-white font-bold text-sm rounded px-2 py-1 shadow-md">
                {step.step}
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {step.desc}
            </p>
          </motion.div>
        ))}

        {/* Dotted line (desktop only) */}
        <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 border-t border-dashed border-gray-300 z-0"></div>
      </motion.div>
    </section>
  );
};

export default WorkingProcess;