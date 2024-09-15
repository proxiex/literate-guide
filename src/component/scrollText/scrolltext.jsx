import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function ScrollText({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.15"],
  });

  const words = value.split(" ");
  return (
    <h4
      className="text-[var(--text-color)] md:text-left text-center text-[22px] flex flex-wrap"
      ref={element}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        //console.log(start, end);
        return (
          <Word key={index} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </h4>
  );
}

export default ScrollText;

const Word = ({ children, range, progress }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-2 mt-1.5">
      {characters.map((char, index) => {
        const start = range[0] + index * step;
        const end = range[0] + step * (index + 1);
        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};
