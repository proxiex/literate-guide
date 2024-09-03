"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../layout/layout";
import { motion } from "framer-motion";
import Link from "next/link";

function TopSection({ page, title, description }) {
  let { theme } = useContext(ThemeContext);
  return (
    <div className=" md:pb-28  w-screen primary-bg font-sora">
      <div className="w-screen flex justify-center relative h-full">
        <div className=" min-h-screen  w-full">
          <Image
            src={
              theme === "dark"
                ? "/images/earthdark.svg"
                : "/images/earthlight.svg"
            }
            alt=""
            width={1009}
            height={638}
            className={`h-full object-cover  w-full `}
          />
        </div>
        <div className="absolute md:top-1/3 top-1/4 z-10 md:bottom-20 bottom-40 text-center flex flex-col bg-gradient-to-b from-transparent to-90% to-[var(--primary-bg-color)]  ">
          <motion.div
            className=" text-sm text-[#2684FB] font-semibold px-6 py-2 ring-2 ring-[#2684FC] rounded-full  bg-[#004EB1] bg-opacity-20  w-fit mx-auto "
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.2 },
            }}
          >
            {page}
          </motion.div>

          <motion.div
            className="md:text-5xl text-2xl font-bold md:w-1/2 w-11/12 mt-3 mx-auto"
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.4 },
            }}
          >
            {title}
          </motion.div>
          <motion.div
            className="md:text-lg mt-6 md:w-1/2 w-11/12 mx-auto secondary-text"
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.6 },
            }}
          >
            {description}
          </motion.div>
          <div>
            <Link href={"/contactUs"}>
              <motion.button
                type="button"
                className="text-white bg-[#2684FB] rounded-full py-4 px-16 mt-10 md:w-fit w-11/12 "
                initial={{
                  x: "-100%",
                }}
                whileInView={{
                  x: 0,
                  transition: { duration: 0.2 },
                }}
              >
                {" "}
                Let’s Talk
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
