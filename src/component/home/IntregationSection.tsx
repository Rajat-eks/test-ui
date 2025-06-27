"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phone from "@/@/component/assets/phone.svg";
import hubspot from "@/@/component/assets/Hubspot.webp";
import oracle from "@/@/component/assets/Oracle.webp";
import salesforce from "@/@/component/assets/Salesforce.webp";
import zoho from "@/@/component/assets/Zoho.webp";
import surveymonkey from "@/@/component/assets/monkey.svg";
import typeform from "@/@/component/assets/typeform.svg";
import medallia from "@/@/component/assets/Medallia.webp";
import jotform from "@/@/component/assets/Jotform.webp";
import sheets from "@/@/component/assets/GoogleSheets.webp";
import leadsquared from "@/@/component/assets/Leadsquared.webp";
import freshsales from "@/@/component/assets/FreshSales.webp";
import dynamics from "@/@/component/assets/Dynamics.webp";
import bamboo from "@/@/component/assets/BambooHR.webp";
import workday from "@/@/component/assets/Workday.webp";
import ukg from "@/@/component/assets/UKG.webp";
import zohopeople from "@/@/component/assets/Zoho.webp";
import zoom from "@/@/component/assets/zoom.svg";
import slack from "@/@/component/assets/image 48.svg";
import google from "@/@/component/assets/google.svg";

const integrations = [
  {
    title: "CRM",
    tools: [
      { name: "HubSpot", img: hubspot },
      { name: "ORACLE", img: oracle },
      { name: "Salesforce", img: salesforce },
      { name: "Zoho", img: zoho },
    ],
  },
  {
    title: "Survey",
    tools: [
      { name: "SurveyMonkey", img: surveymonkey },
      { name: "Typeform", img: typeform },
      { name: "Medallia", img: medallia },
      { name: "Jotform", img: jotform },
    ],
  },
  {
    title: "Sales",
    tools: [
      { name: "Google Sheets", img: sheets },
      { name: "Leadsquared", img: leadsquared },
      { name: "Freshsales", img: freshsales },
      { name: "Dynamic 365", img: dynamics },
    ],
  },
  {
    title: "HRMS",
    tools: [
      { name: "BambooHR", img: bamboo },
      { name: "Workday", img: workday },
      { name: "UKG", img: ukg },
      { name: "Zoho People", img: zohopeople },
    ],
  },
  {
    title: "Productive tools",
    tools: [
      { name: "Zoom", img: zoom },
      { name: "Slack", img: slack },
      { name: "Google Workspace", img: google },
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const IntegrationsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
      >
        Easily <span className="text-blue-600">Integrate</span> with multiple tools
      </motion.h2>
      <p className="text-gray-500 mb-14">
        Compatible with 30+ popular SaaS solutions.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 items-center">
        {/* Left integrations */}
        <div className="space-y-10">
          {integrations.slice(0, 2).map((block, i) => (
            <motion.div
              key={block.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow p-4 w-full max-w-xs mx-auto"
            >
              <h4 className="text-sm font-medium text-left text-gray-600 mb-3">
                {block.title}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {block.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-center bg-gray-100 rounded py-2 px-3"
                  >
                    <Image src={tool.img} alt={tool.name} className="h-6 w-auto" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <Image
            src={phone}
            alt="Phone UI"
            className="w-[260px] sm:w-[320px] md:w-[380px]"
          />
        </motion.div>

        {/* Right integrations */}
        <div className="space-y-10  ">
          {integrations.slice(2, 4).map((block, i) => (
            <motion.div
              key={block.title}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow p-4 w-full max-w-xs mx-auto "
            >
              <h4 className="text-sm font-medium text-left text-gray-600 mb-3">
                {block.title}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {block.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center justify-center bg-gray-100 rounded py-2 px-3"
                  >
                    <Image src={tool.img} alt={tool.name} className="h-6 w-auto" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={4}
        className="mt-12"
      >
        <div className="bg-white rounded-xl shadow p-4 w-full max-w-md mx-auto">
          <h4 className="text-sm font-medium text-gray-600 mb-3">Productive tools</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {integrations[4].tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center justify-center bg-gray-100 rounded py-2 px-4"
              >
                <Image src={tool.img} alt={tool.name} className="h-6 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IntegrationsSection;