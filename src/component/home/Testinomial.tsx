"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Name",
    title: "Designation",
    content:
      "Truly a blessing for people with bad credit score but a good intention to pay the funds in time. Helped resolve my much needed financial crisis...",
  },
  {
    name: "Name",
    title: "Designation",
    content:
      "It's good 🙏 for emergency if you apply instant but not as good as expected. I am thankful 🙏...",
  },
  {
    name: "Name",
    title: "Designation",
    content:
      "Smooth process and great app interface. Got the loan disbursed within minutes.",
  },
  {
      name: "Name",
    title: "Designation",
    content:
      "Never expected such fast disbursal. Really impressed by the support as well.",
  },
  {
     name: "Name",
    title: "Designation",
    content:
      "Got the loan during a medical emergency without any hassle. Thank you Loan Plus!",
  },
  {
    name: "Name",
    title: "Designation",
    content:
      "If you're looking for fast loan approval, this is the app! Clean and simple process.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TestimonialSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#e0f2ff] to-[#f1f6fb] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0a0a23] mb-12"
        >
          Testimonials on Google Play Store
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col justify-between"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5b6caa] text-white flex items-center justify-center text-lg font-bold">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0a0a23]">
                      {t.name}
                    </h3>
                    <div className="flex text-yellow-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-[#0a0a23] mb-2 text-base sm:text-lg">
                  {t.title}
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {t.content}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
