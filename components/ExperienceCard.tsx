import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: {
    id: number,
    company: string,
    role: string,
    logo: string,
    icon_skills: string[],
    descriptions: string[],
    start_time: string,
    end_time: string,
  }
};

export default function ExperienceCard({ data }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" h-20 xl:h-[100px] object-cover object-center"
        src={data.logo}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{data.role}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1 whitespace-nowrap">{data.company}</p>
        <div className="hidden md:flex space-x-2 my-2">
          {data.icon_skills.map((icon, idx) => (<img
            key={idx}
            className="h-10 w-10 rounded-full object-cover"
            src={icon}
            alt=""
          />))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {data.start_time + " - " + data.end_time}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          {data.descriptions.map((des, idx) => (<li key={idx}>{des}</li>))}
        </ul>
      </div>
    </article>
  );
}
