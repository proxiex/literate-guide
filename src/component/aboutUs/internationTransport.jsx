import Image from "next/image";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

function InternationTransport() {
  return (
    <div className="primary-bg lg:px-28 md:px-14  px-5 md:py-28 py-14 font-sora flex flex-col md:gap-7 gap-2">
      <div className="md:text-2xl text-sm font-semibold">CARMA TRANSPORT</div>
      <div className=" gap-10 md:flex text-8xl hidden font-extrabold">
        INTERNATIONAL
        <Image
          src={"/images/aboutustruck.png"}
          alt=""
          height={86}
          width={310}
          className="rounded-full w-full max-h-[86px] object-cover md:flex hidden "
        />
      </div>
      <div className=" gap-10 text-8xl font-extrabold justify-between md:flex hidden">
        <div>

      TRANSPORT 
        </div>
        <div>

      COMPANY
        </div>
      </div>
      <div className="text-2xl md:hidden flex font-extrabold">
        INTERNATIONAL TRANSPORT COMPANY
        </div>
      <div className="flex gap-10">
      <Image
          src={"/images/home.svg"}
          alt=""
          height={86}
          width={310}
          className="rounded-full w-full max-h-[96px] object-cover md:flex hidden"
        />
        <div className="rounded-full bg-[var(--text-color)] text-[var(--primary-bg-color)] w-fit p-6 h-fit md:flex hidden">

        <BsArrowDownRight className="text-5xl"/>
        </div>
        
        <div className="md:text-lg text-sm md:max-w-[50%]">
        Carma International Transport offers reliable logistics solutions worldwide, specialising in road, air, and sea freight. With advanced tracking and round-the-clock support, we ensure timely delivery for all shipments, large or small.
        </div>

      </div>
    </div>
  );
}

export default InternationTransport;
