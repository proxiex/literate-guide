"use client";
import React from "react";

import { motion } from "framer-motion";

const ControlTab = ({ active, setactive, tabs }) => {
  return (
    <>
      <motion.div
        className=" rounded-full flex items-center p-[4.5px] 3xl:p-[6px] secondary-bg w-fit"
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 150 },
        }}
      >
        {tabs.map((item) => {
          return (
            <button
              onClick={() => setactive(item)}
              key={item?.id}
              className={`${
                active?.id === item?.id
                  ? " primary-bg  rounded-full"
                  : "opacity-50"
              }  h-full flex-1 px-8 py-4`}
            >
              {item?.title}
            </button>
          );
        })}
      </motion.div>
    </>
  );
};

export default ControlTab;
