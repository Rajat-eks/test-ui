'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 157, suffix: 'k+', label: 'Loans Disbursed' },
  { value: 50, suffix: 'k+', label: 'Satisfied Users' },
  { value: 240, suffix: 'cr+', label: 'Amount Disbursed' },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#f8fbfd] py-16 px-4 sm:px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center  rounded-xl  hover:shadow-sm transition duration-300 ease-in-out p-6 ${
                inView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                    separator=","
                  />
                )}
              </h3>
              <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
