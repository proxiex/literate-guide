"use client";
import { Disclosure } from "@headlessui/react";
import React from "react";
import { FaCircleMinus } from "react-icons/fa6";
import { IoAddCircle } from "react-icons/io5";
import { PiDiamondBold } from "react-icons/pi";
import { motion } from "framer-motion";

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Initial position offset for stagger
  },
  visible: {
    opacity: 1,
    y: 0, // Final position after stagger
  },
};

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Start animation before children
      staggerChildren: 0.2, // Stagger child animations by 0.2 seconds
    },
  },
};

function FAQ() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg  font-sora flex flex-col md:gap-12 gap-6 ">
      <motion.div
        className="md:text-4xl text-2xl font-semibold md:w-1/4 w-3/4"
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.2 },
        }}
      >
        Frequently Asked Question
      </motion.div>
      <div>
        {data.map((item, index) => (
          <Disclosure>
            {({ open }) => (
              <motion.div
                transition={{ delay: parseFloat(`0.${index + 2}`) }}
                initial={"hidden"}
                whileInView="visible"
                variants={parentVariants}
              >
                <motion.div variants={childVariants}>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg   md:py-8 py-4 text-left text-sm font-medium  focus:outline-none ">
                    <span className="flex gap-2 md:text-2xl text-sm font-medium w-11/12 ">
                      <div className=" h-full md:w-6  w-4 flex my-auto">
                        <PiDiamondBold className="  " />
                      </div>
                      {item.name}
                    </span>
                    {open ? (
                      <FaCircleMinus className="text-xl my-auto" />
                    ) : (
                      <IoAddCircle className="text-2xl my-auto" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="md:py-8 py-3 md:text-base text-xs ">
                    {item.description}
                  </Disclosure.Panel>
                </motion.div>
                <hr className="bg-[#BABABA]" />
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

const data = [
  {
    name: "Lorem ipsum dolor sit amet consectetur.",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
 
  {
    name: "Lorem ipsum dolor sit amet consectetur.",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur.",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
 
  {
    name: "Lorem ipsum dolor sit amet consectetur.",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
];
