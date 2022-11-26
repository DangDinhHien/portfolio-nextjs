import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import experiences from "../data/experients.json";

console.log(experiences)

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col  text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll py-10 md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {experiences.map(exp => (<ExperienceCard key={exp.id} data={exp} />))}
      </div>
    </motion.div>
  );
}
