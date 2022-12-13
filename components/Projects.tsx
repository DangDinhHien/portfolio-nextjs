import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://news.blr.com/app/uploads/sites/3/2019/10/Team-project.jpg"
              alt=""
              className="md:h-[300px] rounded-lg"
            />
            <div className="space-y-10 px-0 xl:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="hidden md:block text-lg text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia laudantium id, saepe sapiente iure velit voluptatum
                exercitationem atque obcaecati? Iure atque, soluta vero ab
                expedita sed facere cum repellendus possimus!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#fff]/4 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
