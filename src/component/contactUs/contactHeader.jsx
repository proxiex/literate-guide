"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Children } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose, IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function ContactHeader({
  children,
  stepper,
  setstepper,
  values,
  setFieldValue,
}) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  const gobackHandler = () => {
    console.log(stepper, values?.lookingFor)
    if (values?.lookingFor !== "Other" && stepper === 2) {
      setstepper(0);
      setFieldValue("lookingFor", "");
    } else {
      setstepper(stepper - 1);
    }
    if (stepper === 1) {
      setFieldValue("lookingFor", "");
    }
  };
  return (
    <div className="  bg-transparent w-full min-h-screen flex flex-col">
      <div className=" lg:px-28 md:px-14  px-5 md:py-11  py-5 flex justify-between">
        {stepper >0 ? (
          <div>
            <div
              className="arrow-main absolute lg:left-28 md:left-14  left-5 border p-3 w-[60px] h-[60px] mb-2 rounded-full sm:scale-[1] scale-[0.5]"
              data-state="1"
              onClick={() => gobackHandler()}
            >
              <div className="arrow-wrapper ">
                <span className="arrow-span">
                  <FaArrowLeftLong className="arr-1   a-btn-1 text-4xl" />

                  <FaArrowLeftLong className="arr-2 w  a-btn-2 text-4xl" />
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Image
              src={"/images/logo.png"}
              alt=""
              height={60}
              width={72}
              className="max-h-16 max-w-20"
            />
          </div>
        )}
        {stepper === 1 || stepper === 2 ? (
          <motion.div
            initial={{
              y: "100%",
              x: "-100%",
            }}
            whileInView={{
              y: 0,
              x: 0,
              transition: { duration: 0.2 },
            }}
            className="bg-[#e8e8e8] px-4 py-2 rounded-full my-auto"
          >
            {values.lookingFor}
          </motion.div>
        ) : (
          ""
        )}

        <div>
          <div
            className="arrow-main absolute lg:right-28 md:right-14  right-5 border p-3 w-[60px] h-[60px] rounded-full sm:scale-[1] scale-[0.5]"
            data-state="1"
            onClick={() => goBack()}
          >
            <div className="arrow-wrapper ">
              <span className="arrow-span">
                <IoClose className="arr-1 w-10  a-btn-1 text-4xl" />

                <IoClose className="arr-2 w-10  a-btn-2 text-4xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {children}
      <div className="flex justify-between items-center mt-auto lg:px-28 md:px-14  px-5 md:py-11  py-5">
        <div className="md:flex hidden w-20">
          {stepper > 0 && (
            <div>
              <Image
                src={"/images/logo.png"}
                alt=""
                height={60}
                width={72}
                className="max-h-16 max-w-20"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
