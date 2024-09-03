"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function TrannsportNetworkcard() {
  return (
    <div className="lg:px-28 md:px-14 primary-bg  px-5 md:py-28 py-14 primary-bg font-sora">
      <div className=" bg-gradient-to-bl  from-[var(--secondary-bg-color)] from-80% to-[var(--transport-network-to)]    flex md:justify-between justify-center rounded-2xl">
        <div className="flex flex-col md:gap-10 gap-6 lg:px-28 md:px-14  px-5 md:py-28 py-14  mx-auto justify-between">
          <motion.h1
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.2 },
            }}
            className="md:text-6xl text-2xl  text-center font-bold   md:mx-0 mx-auto "
          >
            <span className="text-[var(--text-color)] ">
              Get more than quality transport network{" "}
            </span>
          </motion.h1>
          <div className="flex md:flex-row flex-col gap-6  mt-auto md:mx-auto">
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
        
      </div>
    </div>
  );
}

export default TrannsportNetworkcard;
