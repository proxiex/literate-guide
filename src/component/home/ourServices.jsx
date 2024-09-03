"use client";
import React, { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

function OurServices() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg  font-sora flex flex-col gap-12 ">
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.2 },
        }}
        className="md:text-4xl text-2xl font-semibold md:w-1/2"
      >
        How can you make the best of our services
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 ">
        
      <div className="home-service-bg flex h-full w-full rounded-lg">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            variants={{
              visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
            }}
            className="m-auto h-[525px]  flex"
          >
            <BsPlayCircleFill className="m-auto  text-6xl" />
          </motion.div>
        </div>
       
          <div className="home-service-bg flex h-full w-full rounded-lg">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            variants={{
              visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
            }}
            className="m-auto h-[525px]  flex"
          >
            <BsPlayCircleFill className="m-auto  text-6xl" />
          </motion.div>
        </div>
       
        <div className="home-service-bg flex h-full w-full rounded-lg">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            variants={{
              visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
            }}
            className="m-auto h-[525px]  flex"
          >
            <BsPlayCircleFill className="m-auto  text-6xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
