"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function TransportNetwork() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg font-sora">
      <div className=" bg-gradient-to-bl  from-[#222222] from-70% to-[#444444]  md:pl-16   flex md:justify-between justify-center rounded-2xl">
        <div className="flex flex-col md:gap-10 gap-6 mt-16 w-1/2 ">
          <motion.h1
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.2 },
            }}
            className="md:text-6xl text-2xl md:text-left text-center font-bold   md:mx-0 mx-auto"
          >
            <span className="text-white ">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </span>
          </motion.h1>
          <div className="flex md:flex-row flex-col gap-6 mb-16 mt-auto">
          <Link href={"/contactUs"}>
            <motion.button
              initial={{
                x: "-100%",
              }}
              whileInView={{
                x: 0,
                transition: { duration: 0.5 },
              }}
              type="button"
              className="primary-button md:mx-0 mx-auto"
            >
              Let's Talk
            </motion.button>
            </Link>
            <Link
              href={"/aboutUs"}
              
            >
               <motion.button
              initial={{
                x: "-100%",
              }}
              whileInView={{
                x: 0,
                transition: { duration: 0.2 },
              }}
              type="button"
              className="secondary-button  md:mx-0 mx-auto"
            >

              About Us
            </motion.button>
            </Link>
          </div>
        </div>
        <div className="md:flex hidden bg-gradient-to-br  from-[#222222] from-60% to-[#1C5AFB] rounded-2xl">
          <Image
            src={"/images/truck.svg"}
            alt=""
            height={515}
            width={568}
            className="rounded-r-2xl -mt-20 mb-7 "
          />
        </div>
      </div>
    </div>
  );
}

export default TransportNetwork;
