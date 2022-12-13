import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import skills from "../data/skills.json";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="h-screen flex flex-col text-center relative md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-20 md:top-6 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map(skill => (<Skill key={skill.id} data={skill} />))}
      </div>
    </motion.div>
  );
}
