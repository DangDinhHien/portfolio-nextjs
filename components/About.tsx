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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        src="https://images.unsplash.com/photo-1602206304384-428fc5a49a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          aspernatur commodi illo recusandae, veniam delectus labore aut nam
          dolorem id alias iure officia quia maiores earum voluptatum nobis
          facilis fugit veritatis placeat magnam? Totam officia ducimus non
          aspernatur rem deleniti nemo ratione eligendi, possimus eum corporis
          vitae perspiciatis, animi illum deserunt nobis? Incidunt amet maiores
          sint nulla illo accusamus doloribus tempora aliquam maxime dolorum,
          eaque laborum quisquam in inventore cupiditate et deleniti ad autem
          dolor nostrum modi minus, iure totam!
        </p>
      </div>
    </motion.div>
  );
}
