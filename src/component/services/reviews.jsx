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

function Reviews() {
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
    <main className=" md:py-28 py-14  primary-bg font-sora">
      <div className="relative overflow-hidden primary-bg  max-h-[350px]">
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

export default Reviews;

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
            <div className="flex gap-10 secondary-bg md:p-10 p-2.5 lg:mx-20 md:mx-14 mx-3 rounded-lg">
              <p className="text-center xl:text-3xl lg:text-xl text-base font-medium   secondary-text">
                {item.description}
              </p>
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
      {boxes.map((item, idx) => {
        return (
          <>
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className="flex gap-2"
            >
              <motion.div
                className="md:h-16 h-9 md:w-16 w-9 rounded-full bg-[#1A1A1E] border border-[#27272B] flex"
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0, rotate: [0, 180, 270, 360] },
                  hidden: { opacity: 0, x: 50 },
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  height={52}
                  width={52}
                  className="rounded-full md:max-h-12 max-h-7 md:max-w-12 max-w-7 m-auto"
                />
              </motion.div>
              {idx === imgIndex && (
                <div className="flex primary-bg flex-col gap-0.5 text-left">
                  <div className="xl:text-lg lg:text-base text-xs font-semibold">
                    {item.name}
                  </div>
                  <div className="xl:text-xs lg:text-[10px] text-[8px] secondary-text">
                    {item.title}
                  </div>
                  <div>
                    <Rating
                      name="read-only"
                      size="small"
                      value={item.rating}
                      readOnly
                      precision={0.5}
                    />
                  </div>
                </div>
              )}
            </button>
          </>
        );
      })}
    </div>
  );
};

const boxes = [
  {
    id: 1,
    name: "Manuel Lanzini",
    title: "Professional Footballer",
    image: "/images/avatar/avatar1.png",
    rating: 4,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
  {
    id: 2,
    name: "Manuel Lanzini",
    title: "Professional Footballer",
    image: "/images/avatar/avatar2.png",
    rating: 3.5,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
  {
    id: 3,
    name: "Manuel Lanzini",
    title: "Professional Footballer",
    image: "/images/avatar/avatar3.png",
    rating: 5,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
  {
    id: 4,
    name: "Manuel Lanzini",
    title: "Professional Footballer",
    image: "/images/avatar/avatar4.png",
    rating: 5,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
  {
    id: 5,
    name: "Manuel Lanzini",
    title: "Professional Footballer",
    image: "/images/avatar/avatar5.png",
    rating: 5,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
  },
];
