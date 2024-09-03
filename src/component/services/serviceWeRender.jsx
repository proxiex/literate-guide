"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRoad, FaTruck, FaTruckFast } from "react-icons/fa6";
import { GiAirplaneDeparture, GiHandTruck } from "react-icons/gi";
import Image from "next/image";
import ServiceOfferGrid from "../home/serviceOfferGrid";

function ServiceWeRender({title, description, data}) {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14  primary-bg font-sora">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <motion.h1
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.2 },
            }}
            className="md:text-6xl text-[32px] font-semibold md:w-1/2"
          >
            {title}
          </motion.h1>
          <motion.h1
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.5 },
            }}
            className="md:text-sm text-xs md:w-1/2"
          >
           {description}
          </motion.h1>
        </div>
        <ServiceOfferGrid data={data} />
      </div>
    </div>
  );
}

export default ServiceWeRender;

