"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaStopwatch,
  FaHandHoldingUsd,
  FaFileAlt,
  FaShieldAlt,
  FaHome,
} from "react-icons/fa";

// 👇 Counter Component
const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
};

const WhyRamFincorp = () => {
  const cards = [
    {
      icon: <FaStopwatch className="text-blue-600 text-2xl" />,
      title: "Simple & Secure Process",
      text: "Apply online, check your eligibility and get money directly in your bank in 10 minutes.",
    },
    {
      icon: <FaHandHoldingUsd className="text-blue-600 text-2xl" />,
      title: "Minimal Documentation",
      text: "Repay the loan amount in easy EMI with flexible tenure options.",
    },
    {
      icon: <FaHome className="text-blue-600 text-2xl" />,
      title: "24/7 Customer Support",
      text: "No collateral is required to apply for our personal loans.",
    },
    {
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
      title: "100% Paperless",
      text: "No paperwork or physical documentation is required, and you can apply and get a personal loan completely online.",
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Safe, Secure and Transparent",
      text: "Our loan application process is fully secured and safe and there are no hidden charges.",
    },
    
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-20">
      {/* 👉 Top Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Why Choose <span className="text-blue-500">Loan Plus?</span>
        </h2>
        <div className="mt-2 w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* 👉 Cards with Neon Glow */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group p-[1px] rounded-xl"
          >
            {/* Neon Layer Behind */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#c7d2fe] via-[#e0f2fe] to-[#c7d2fe] opacity-60 blur-2xl rounded-xl group-hover:opacity-80 transition-all duration-500 z-0"></div>

            {/* Actual Card */}
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">{card.icon}</div>
                <h4 className="ml-4 text-lg font-semibold text-gray-800">
                  {card.title}
                </h4>
              </div>
              <p className="text-gray-600 text-sm">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 👉 Stats Section */}
      <div className="max-w-screen-xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center text-center text-white bg-black px-4 py-10 rounded-xl">
        <div>
          <p className="text-sm text-gray-400 uppercase mb-1">Over</p>
          <p className="text-xl font-bold text-blue-500">
            <CountUp end={157} /> Cr+
          </p>
          <p className="text-sm">Loan Disbursed</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 uppercase mb-1">Over</p>
          <p className="text-xl font-bold text-blue-500">
            <CountUp end={50000} />+
          </p>
          <p className="text-sm">Satisfied Users</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 uppercase mb-1">Over</p>
          <p className="text-xl font-bold text-blue-500">
            <CountUp end={240} /> Cr+
          </p>
          <p className="text-sm">Amount Distributed</p>
        </div>
      </div>
    </section>
  );
};

export default WhyRamFincorp;
