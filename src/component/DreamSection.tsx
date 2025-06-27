"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import gadget from "@/@/component/assets/gadget.png";
import skills from "@/@/component/assets/skill.png";
import medical from "@/@/component/assets/medical.png";
import travel from "@/@/component/assets/vehicle.png";
import vehicle from "@/@/component/assets/vehicle.png";
import home from "@/@/component/assets/home.png";

// Responsive category orbit positions
const desktopPositions = [
  { title: "Gadget", src: gadget, x: 0, y: -320 },
  { title: "Skills Courses", src: skills, x: 240, y: -240 },
  { title: "Medical Emergencies", src: medical, x: 320, y: 0 },
  { title: "Travel", src: travel, x: 240, y: 240 },
  { title: "Vehicle Consolidation", src: vehicle, x: -240, y: 240 },
  { title: "Home Renovations", src: home, x: -320, y: 0 },
];

const tabletPositions = [
  { title: "Gadget", src: gadget, x: 0, y: -200 },
  { title: "Skills Courses", src: skills, x: 140, y: -140 },
  { title: "Medical Emergencies", src: medical, x: 180, y: 0 },
  { title: "Travel", src: travel, x: 140, y: 140 },
  { title: "Vehicle Consolidation", src: vehicle, x: -140, y: 140 },
  { title: "Home Renovations", src: home, x: -180, y: 0 },
];

const mobilePositions = [
  { title: "Gadget", src: gadget, x: 0, y: -160 },
  { title: "Skills Courses", src: skills, x: 100, y: -130 },
  { title: "Medical Emergencies", src: medical, x: 140, y: 10 },
  { title: "Travel", src: travel, x: 100, y: 140 },
  { title: "Vehicle Consolidation", src: vehicle, x: -100, y: 140 },
  { title: "Home Renovations", src: home, x: -140, y: 10 },
];

const DreamSection = () => {
  const [positions, setPositions] = useState(desktopPositions);

  useEffect(() => {
    const updatePositions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPositions(mobilePositions);
      } else if (width < 1024) {
        setPositions(tabletPositions);
      } else {
        setPositions(desktopPositions);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <section className="relative bg-[#05062d] text-white py-20 px-4 overflow-hidden max-w-screen overflow-x-hidden">
      {/* Glow Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-500 opacity-20 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </motion.div>

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12 px-2">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Dream of anything, <br />
          Dream of everything with{" "}
          <span className="text-blue-500">Loan Plus</span>
        </h2>
      </div>

      {/* Phone + Orbiting Category Cards */}
      <div className="relative flex justify-center items-center h-[700px] sm:h-[820px] md:h-[920px]">
        <div className="relative w-full h-full">
          {/* Phone Image */}
          <motion.img
            src="/mobile2.png"
            alt="Phone"
            className="absolute top-1/2 left-1/2 w-[140px] sm:w-[180px] md:w-[220px] z-10 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Orbiting Cards */}
          {positions.map((cat, index) => (
            <motion.div
              key={index}
              className="absolute w-[90px] sm:w-[110px] md:w-[140px] rounded-xl overflow-hidden shadow-md border border-white/10 backdrop-blur-lg bg-white/5"
              style={{ top: "50%", left: "50%" }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, x: cat.x, y: cat.y, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="relative w-full h-[70px] sm:h-[80px] md:h-[100px]">
                <Image
                  src={cat.src}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] sm:text-xs font-semibold py-1 px-2 text-center">
                  {cat.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-center text-gray-300 mt-12 text-lg md:text-xl z-10 relative"
      >
        Apply within minutes. Get Cash within seconds. <br />
        Repay on your own terms.
      </motion.p>
    </section>
  );
};

export default DreamSection;
