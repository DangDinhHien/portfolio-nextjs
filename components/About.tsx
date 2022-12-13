import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg"
        alt=""
        className="-mb-28 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px]"
      />
      <div className="space-y-10 md:px-10">
        {/* <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4> */}
        <p className="text-base lg:text-lg xl:text-xl">
        I&apos;m a web developer with over 3 years of experience. I’m
        considered a team-player because I like to help other. I love
        programming and very hard to learn the new technology. I desire to have
        a good environment to develop my ability. I would like to work as a
        web developer in an organization where i can utilize my skills and
        knowledge related to becoming a full-stack developer.
        </p>
      </div>
    </motion.div>
  );
}
