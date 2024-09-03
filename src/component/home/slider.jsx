"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Start animation before children
      staggerChildren: 0.3, // Stagger child animations by 0.2 seconds
    },
  },
};

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

const imageVariants = {
  hidden: {
    rotate: 90, // Initial rotation (90 degrees for right-to-left)
  },
  visible: {
    rotate: 0, // Final rotation (0 degrees for normal view)
    transition: { duration: 1 }, // Animation duration (1 second)
  },
};
const boxes = [
  {
    id: 1,
    name: "Card",
    image: "/images/transport/transport1.png",
    href: "/services/roadTransport",
  },
  // {
  //   id: 2,
  //   name: "Helicopter Transport",
  //   image: "/images/transport/transport2.png"
  // },
  {
    id: 3,
    name: "Card",
    image: "/images/transport/transport3.png",
    href: "/services/airTransport",
  },
  {
    id: 4,
    name: "Card",
    image: "/images/transport/transport4.png",
    href: "/services",
  },
  {
    id: 5,
    name: "Card",
    href: "/services/luxuryFurniture",
    image: "/images/transport/transport5.png",
  },
  {
    id: 6,
    name: "Card",
    href: "/services/expressTransport",
    image: "/images/transport/transport6.png",
  },
  {
    id: 7,
    name: "Card",
    href: "/services/specialDeliveries",
    image: "/images/transport/transport7.png",
  },
  {
    id: 8,
    name: "Card",
    href: "/services/internationalTransport",
    image: "/images/transport/transport8.png",
  },
];
const TypeOfTransport = () => {
  const navRef = useRef();

  const handleNav = (direction) => {
    const scrollAmount = 1000;
    const scrollDuration = 500; // milliseconds

    const scrollContainer = navRef.current;
    const startScrollPosition = scrollContainer.scrollLeft;
    const targetScrollPosition =
      direction === "left"
        ? startScrollPosition - scrollAmount
        : startScrollPosition + scrollAmount;

    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const easedProgress = progress; // You can apply easing if needed

      scrollContainer.scrollLeft =
        startScrollPosition +
        easedProgress * (targetScrollPosition - startScrollPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <main className="  md:py-28 py-14  primary-bg font-sora overflow-x-scroll">
        <div className="flex gap-5 md:mb-16 mb-6 lg:px-28 md:px-14  px-5">
          <motion.h1
            initial={{
              x: "-100%",
            }}
            whileInView={{
              x: 0,
              transition: { duration: 0.2 },
            }}
            className="md:text-4xl text-xl font-semibold"
          >
            Types
          </motion.h1>
          <div className="flex flex-1 items-start justify-end gap-4">
            <motion.div
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              variants={{
                visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
                hidden: { opacity: 0, x: 50 },
              }}
            >
              <motion.button
                whileHover={{
                  scale: 1.3,
                  transition: { delay: 0, duration: 0.1, ease: "easeInOut" },
                }}
                onClick={() => handleNav("left")}
                className="primary-border rounded-full md:p-2.5 p-1"
              >
                <GoArrowLeft className="md:text-3xl   " />
              </motion.button>
            </motion.div>
            <motion.div
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              variants={{
                visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
                hidden: { opacity: 0, x: 50 },
              }}
            >
              <motion.button
                whileHover={{
                  scale: 1.3,
                  transition: { delay: 0, duration: 0.1 },
                }}
                onClick={() => handleNav("right")}
                className="primary-border rounded-full md:p-2.5 p-1"
              >
                <GoArrowRight className="md:text-3xl " />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className=" cursor-pointer w-full flex md:gap-6 gap-1.5 whitespace-nowrap overflow-x-auto lg:px-28 md:px-14  px-5"
          ref={navRef}
          initial="hidden"
          whileInView="visible"
          variants={parentVariants}
          viewport={{ once: true }}
        >
          {boxes.map((box) => {
            return (
              <motion.div
                whileHover={{
                  backgroundColor: "#282828",
                  scale: 0.98,
                }}
                transition={{ duration: 0.1 }}
                variants={childVariants}
                className=" rounded-lg relative"
                key={box?.id}
              >
                <div className="absolute z-10 md:text-2xl text-xs font-semibold text-white md:bottom-5 bottom-2 md:left-5 left-2.5 text-wrap">
                  {box.name}
                </div>
                <Link href={box.href} >
                  <div className="md:h-[526px] h-[205px] md:w-[384px] w-[150px]">

                  <img
                    src={"https://via.placeholder.com/526x400"}
                    alt=""
                    height={526}
                    width={400}
                    className="md:h-[526px] h-[205px] md:w-[384px] w-[150px] object-cover rounded-lg"
                    />
                    </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </>
  );
};

export default TypeOfTransport;
