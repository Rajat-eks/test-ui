"use client";

import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

import nikunj from "@/@/component/assets/nikunj-agarwal.jpg";
import arvind from "@/@/component/assets/arvind-kumar.jpg";
import sameer from "@/@/component/assets/samir-sethi.jpg";
import saurav from "@/@/component/assets/saurav-kumar.jpg";
import amit from "@/@/component/assets/amit-sharma.jpg";
import sonal from "@/@/component/assets/sonal-kumar.jpg";

// -------- Directors --------
const directors = [
  {
    name: "Ram Karan Soni",
    title: "Director",
    image: "/images/ram-karan-soni.jpg",
    quote:
      "Driving a company to success is never easy, yet as I tell my colleagues, the path to success is always going to be ahead of us, so never step back.",
    linkedin: "#",
  },
  {
    name: "Bharat Soni",
    title: "Director",
    image: "/images/bharat-soni.jpg",
    quote:
      "Our company thrives on innovation and integrity, dedicated to empowering our clients and creating a positive impact in the communities we serve.",
    linkedin: "#",
  },
];

// -------- Team --------
const team = [
  { name: "Nikunj Agarwal", title: "CTO", image: nikunj, linkedin: "#" },
  { name: "Arvind Kumar", title: "Engineer Manager", image: arvind, linkedin: "#" },
  { name: "Samir Sethi", title: "Sr. VP Collection Head", image: sameer, linkedin: "#" },
  { name: "Saurav Kumar", title: "General Manager", image: saurav, linkedin: "#" },
  { name: "Amit Sharma", title: "Marketing Head", image: amit, linkedin: "#" },
  { name: "Sonal Kumar", title: "HR Manager", image: sonal, linkedin: "#" },
];

const LeadershipSection = () => {
  return (
    <section className="bg-[#f0f5ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="text-gray-700 max-w-3xl mx-auto md:mx-0">
            Our leaders embody vision and commitment, driving our company forward with passion and purpose to achieve excellence together.
          </p>
        </motion.div>

        {/* Director Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16">
          {directors.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative rounded-2xl text-xl overflow-hidden shadow-lg group transform transition-transform hover:scale-[1.015]"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={600}
                height={420}
                className="object-cover w-full h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] via-[#00000066] to-transparent px-6 py-6 flex flex-col justify-end text-white transition-opacity duration-500">
                {leader.quote && (
                  <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                    {leader.quote}
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">{leader.name}</p>
                    <p className="text-sm">{leader.title}</p>
                  </div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center px-4 py-3 bg-white">
                <div>
                  <p className="font-semibold text-[14px] text-gray-900">{member.name}</p>
                  <p className="text-[12px] text-gray-600">{member.title}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
