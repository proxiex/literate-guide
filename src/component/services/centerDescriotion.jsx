"use client"
import React from "react";
import { motion } from "framer-motion";
import ScrollText from "../scrollText/scrolltext";

function CenterDescriotion({title, description}) {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14  primary-bg font-sora grid grid-cols-3 lg:gap-10 gap-6">
      <motion.div initial={{
            x: "-100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }} className="md:text-4xl text-2xl font-bold lg:col-span-1 col-span-3 ">
        {title}
      </motion.div>
      <motion.div initial={{
            x: "100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }} className="md:text-3xl  lg:col-span-2 paragraph-color col-span-3">
      <ScrollText value={description} />
      </motion.div>
    </div>
  );
}

export default CenterDescriotion;
