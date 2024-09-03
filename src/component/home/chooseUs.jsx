"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../layout/layout";
import { motion } from "framer-motion";

function ChooseUs() {
  let { theme } = useContext(ThemeContext);

  const data = [
    {
      image: "/images/icon/badgew.png",
      title: "Get the best rates",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      image: "/images/icon/hand.png",
      title: "A dedicated team",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      image: "/images/icon/userverify.png",
      title: "Logistical analysis",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <div className="p-28 primary-bg  font-sora flex flex-col gap-12 ">
      <motion.h1
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: 0,
          transition: { duration: 0.2 },
        }}
        className="text-4xl  font-semibold w-1/3"
      >
        How can you make the best of our services
      </motion.h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <motion.div
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: parseFloat(`0.${index + 2}`) },
            }}
            className="p-8 secondary-bg rounded-lg flex flex-col gap-4"
          >
            <div className="p-5 rounded-full home-choose w-fit bg-[#0171B8]">
              <Image
                src={item.image}
                alt=" "
                height={53}
                width={53}
                className="max-h-[45px] max-w-[45px]"
              />
            </div>
            <div className="font-semibold text-2xl">{item.title}</div>
            <div className="text-sm">{item.decription}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ChooseUs;
