"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HomeTop({data}) {
  return (
    <div className="top-bg grid grid-cols-2 md:gap-14 gap-8 lg:px-28 md:px-14  px-5 md:py-14 py-6 md:mt-20">
      <div className="flex flex-col md:gap-6 gap-4 md:py-28 md:order-1 order-2 md:col-span-1 col-span-2">
        <div className="font-bold lg:text-6xl text-3xl font-sora">
          <motion.h1
           initial={{
            x: "-100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }}
            
          >
            {data.title}
          </motion.h1>
        </div>
        <div className="md:text-lg secondary-text">
        <motion.h1
           initial={{
            x: "-100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5 },
          }}
          >
          {data.description}
          </motion.h1>
        </div>
        <div className="md:mt-8 mt-2 flex flex-col md:flex-row  gap-6">
          <Link href={"/contactUs"}>
          <motion.button  initial={{
            x: "-100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5 },
          }} type="button" className="primary-button">
            Hire a model
          </motion.button>
          </Link>
          <Link href={"/aboutUs"}>
          <motion.button  initial={{
            x: "100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5 },
          }} type="button" className="secondary-button">

            Become a model
          </motion.button>
            </Link>
        </div>
      </div>
      <motion.h1
           initial={{
            x: "100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5 },
          }}
          className="md:order-2 order-1 md:col-span-1 col-span-2"
          >
      <div className="w-full h-full flex">
        <img
          src={data.image}
          alt=""
          height={520}
          width={601}
          className=" z-0 m-auto h-auto object-cover w-auto rounded-2xl aspect-auto "
        />
      </div>
        </motion.h1>
    </div>
  );
}

export default HomeTop;
