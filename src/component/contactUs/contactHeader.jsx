"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function ContactHeader({ children, stepper, setstepper, values, setFieldValue }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const gobackHandler = () => {
    if (values.lookingFor.includes("Other") && stepper === 1) {
      setFieldValue("lookingFor", []);
      setstepper(0);
    } else if (stepper > 0) {
      setstepper(stepper - 1);
    }
  };

  return (
    <div className="bg-transparent w-full min-h-screen flex flex-col">
      <div className="lg:px-28 md:px-14 px-5 md:py-11 py-5 flex justify-between">
        {stepper > 0 ? (
          <div
            className="arrow-main absolute lg:left-28 md:left-14 left-5 border p-3 w-[60px] h-[60px] mb-2 rounded-full sm:scale-[1] scale-[0.5]"
            onClick={gobackHandler}
          >
            <FaArrowLeftLong className="text-4xl" />
          </div>
        ) : (
          <div>
            <Image src={"/images/logo.png"} alt="" height={60} width={72} className="max-h-16 max-w-20" />
          </div>
        )}

        {/* {(stepper === 1 || stepper === 2) && values.lookingFor.length > 0 && (
          <motion.div
            initial={{ y: "100%", x: "-100%" }}
            animate={{ y: 0, x: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#e8e8e8] px-4 py-2 rounded-full my-auto"
          >
            {values.lookingFor.join(", ")}
          </motion.div>
        )} */}
<div></div>
        <div
          className="arrow-main absolute lg:right-28 md:right-14 right-5 border p-3 w-[60px] h-[60px] rounded-full sm:scale-[1] scale-[0.5]"
          onClick={goBack}
        >
          <IoClose className="text-4xl" />
        </div>
      </div>
      {children}
      <div className="flex justify-between items-center mt-auto lg:px-28 md:px-14 px-5 md:py-11 py-5">
        <div className="md:flex hidden w-20">
          {stepper > 0 && (
            <Image src={"/images/logo.png"} alt="" height={60} width={72} className="max-h-16 max-w-20" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
