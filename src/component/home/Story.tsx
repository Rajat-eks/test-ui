"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import lightning from "@/@/component/assets/Icon1.svg";
import versatile from "@/@/component/assets/icon2.svg";
import secure from "@/@/component/assets/icon3.svg";
import dashboard from "@/@/component/assets/banner-loan_b.webp";

const features = [
  {
    icon: lightning,
    title: "Lightning-Fast Payouts",
    description:
      "Disburse funds in real-time — whether it’s one recipient or thousands, send money directly to bank accounts, UPI IDs, or digital wallets with ease.",
  },
  {
    icon: versatile,
    title: "Versatile Payment Choices",
    description:
      "From instant UPI and bank transfers to branded gift cards — pick the perfect payout method for every occasion and audience.",
  },
  {
    icon: secure,
    title: "Secure. Compliant. Reliable.",
    description:
      "Built for peace of mind — every transaction is encrypted, regulation-ready, and transparent from start to finish.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.3,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

export default function PayoutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-blue-600">Loan Plus</span> — Fast. Flexible. Trusted.
          </h2>
          <p className="text-gray-600">
            Effortless bulk and individual payouts with full security and compliance.
          </p>

          <div className="relative border-l-4 border-blue-500 space-y-6 pl-6 mt-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative z-10 rounded-xl p-4 flex gap-4 items-start bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Neon Glow Behind Card */}
                <div className="absolute -inset-1 z-[-1] bg-gradient-to-r from-[#b2d8ff] via-[#d2ccf3] to-[#b2d8ff] opacity-40 blur-2xl rounded-xl group-hover:opacity-60 transition-all duration-500"></div>

                <div className="min-w-[40px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Dots on vertical line */}
            <div className="absolute top-3 left-[-10px] w-3 h-3 bg-white border-4 border-blue-500 rounded-full"></div>
            <div className="absolute top-32 left-[-10px] w-3 h-3 bg-white border-4 border-blue-500 rounded-full"></div>
            <div className="absolute top-[260px] left-[-10px] w-3 h-3 bg-white border-4 border-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Image
            src={dashboard}
            alt="Dashboard preview"
            className="w-full max-w-[600px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
