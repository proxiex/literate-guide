"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function WhyChooseUs() {
  return (
    <div className="primary-bg lg:px-28 md:px-14  px-5 md:py-28 py-14 font-sora ">
      <div className="md:text-4xl text-2xl font-semibold">Why Choose Us</div>
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {data.map((item, index) => (
          <motion.div
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: parseFloat(`0.${index + 2}`) },
            }}
            className="py-8 px-6 box-border-color flex flex-col gap-4"
          >
            <div className="flex h-[60px] w-[60px] rounded-full home-choose text-white  homecardHovericon">
              {item.image}
            </div>
            <div className="font-semibold text-2xl">{item.title}</div>
            <div className="text-sm">{item.decription}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;

const data = [
    {
      image: <span className="icon-shield text-3xl m-auto "></span>,
      title: "card1",
      decription:
        "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: <span className="icon-Reliability text-3xl m-auto "></span>,
      title: "card2",
      decription:
        "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: <span className="icon-Efficiency text-3xl m-auto "></span>,
      title: "card3",
      decription:
        "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      image: <span className="icon-CustomerFocus text-3xl m-auto "></span>,
      title: "card4",
      decription:
        "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
