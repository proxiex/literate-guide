"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { Rating } from "@mui/material";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const boxes = [
  {
    id: 1,
    name: "Manuel Lanzini",
    title: "Professional Footballer",
    image: "/images/avatar.png",
    rating: 4,
    description:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
  },
  {
    id: 2,
    name: "Helicopter Transport",
    title: "Professional Footballer",
    image: "/images/avatar.png",
    rating: 3.5,
    description:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
  },
  {
    id: 3,
    name: "Air Transport",
    title: "Professional Footballer",
    image: "/images/avatar.png",
    rating: 5,
    description:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
  },
];

function SaysAboutUs() {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === boxes.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const handleNav = (direction) => {
    if (direction === "left" && imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else if (direction === "right" && imgIndex < boxes.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < boxes.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <main className="py-28  primary-bg font-sora">
      <div className="flex gap-5 mb-16 px-28">
        <motion.h1 initial={{
            x: "-100%",
          }}
          whileInView={{
            x: 0,
            transition: { duration: 0.2 },
          }} className="text-4xl font-semibold">What Or Clients Say ABout Us</motion.h1>
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
              className=""
              whileHover={{
                scale: 1.3,
                transition: { delay: 0, duration: 0.1, ease: "easeInOut" },
              }}
              onClick={() => handleNav("left")}
            >
              <GoArrowLeft className="text-5xl primary-border rounded-full p-2.5" />
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
              className=""
              onClick={() => handleNav("right")}
            >
              <GoArrowRight className="text-5xl primary-border rounded-full p-2.5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="relative overflow-hidden primary-bg  max-h-[335px]">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center  active:cursor-grabbing h-full"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
        <div className="">
          <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>
        {/* <GradientEdges /> */}
      </div>
    </main>
  );
}

export default SaysAboutUs;

const Images = ({ imgIndex }) => {
  return (
    <>
      {boxes.map((item, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className=" w-screen shrink-0 primary-bg h-full z-10"
          >
            <div className="flex gap-10 secondary-bg p-10 mx-20 rounded-lg">
              <Image
                src={item.image}
                alt=""
                height={203}
                width={165}
                className="max-w-[165px] max-h-[203] object-cover rounded-lg"
              />{" "}
              <div className="content  flex flex-col justify-between">
                <p className="">{item.description}</p>
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <Rating name="read-only" value={item.rating} readOnly precision={0.5} />
                  </div>
                  <p className="text-sm secondary-text">{item.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className=" flex  justify-center gap-2 mt-5">
      {boxes.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3  rounded-full transition-colors ${
              idx === imgIndex
                ? "bg-[var(--text-color)] w-6"
                : " w-3 bg-[var(--primary-bg-color)] primary-border"
            }`}
          />
        );
      })}
    </div>
  );
};
