"use client"
import React from "react";
import { motion } from "framer-motion";
import ScrollText from "../scrollText/scrolltext";

function WhoWeAre() {
  return (
    <div className="primary-bg lg:px-28 md:px-14  px-5 md:py-28 py-14 font-sora grid md:grid-cols-4 gap-6">
      <motion.div initial={{
            x: "-100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }}>
        <button type="button" className="bg-[#222222] text-white w-fit md:px-10 px-12 md:py-4 py-3 rounded-full font-medium whitespace-nowrap">WHO WE ARE</button>
      </motion.div>
      <div className="col-span-3 flex flex-col gap-20">
        <motion.div initial={{
            x: "100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }} className="flex flex-col md:gap-4 gap-3">
            <div className="review-text-secondary md:text-3xl text-2xl font-medium">Our Mission</div>
            <div className="md:text-3xl text-lg text-[#737373]"><ScrollText value="To provide efficient, personalised logistics solutions and multimodal services to national and international destinations, ensuring the safe and timely delivery of luxury furniture while maintaining personalised relationships with our customers."/></div>
        </motion.div>
        <motion.div initial={{
            x: "100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }} className="flex flex-col md:gap-4 gap-3">
            <div className="review-text-secondary md:text-3xl text-2xl font-medium">Our Vision</div>
            <div className="md:text-3xl text-lg text-[#737373]"><ScrollText value="We strive to be a top transport company, prioritizing customer satisfaction, employee growth, environmental responsibility, and technological innovation. We aim to set industry standards for transparency, efficiency, and excellence in freight transport, logistics, and customs services."/></div>
        </motion.div>
        <motion.div initial={{
            x: "100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }} className="flex flex-col md:gap-4 gap-3">
            <div className="review-text-secondary md:text-3xl text-2xl font-medium">Our Goal</div>
            <div className="md:text-3xl text-lg "><ScrollText value="Our goal is to create lasting value through transparent collaborations with customers, becoming trusted partners in their success. We invest in employees, technology, and environmental sustainability to deliver high-quality transport services 365 days a year, positioning ourselves as a reliable asset in the freight transport and logistics market." /></div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhoWeAre;
