"use client";
import { CiCircleCheck } from "react-icons/ci";
import React, { useContext } from "react";
import { IoCaretDown } from "react-icons/io5";
import Image from "next/image";
import { ThemeContext } from "../layout/layout";

function Steps() {
    let {theme} = useContext(ThemeContext)
  return (
    <div className="primary-bg lg:px-28 md:px-14  px-5 md:py-28 py-14 font-sora">
      <div className=" lg:w-1/3 md:1/2 w-full md:text-4xl text-2xl font-semibold mb-10 ">
        Carma transport DONE! in 4 simple steps
      </div>
      <div className="grid md:grid-cols-4 gap-10 ">
        <div className="  flex flex-col gap-4 px-5 order-1">
          <div className="homecardHovericon text-white flex h-[60px] w-[60px] rounded-full justify-center items-center text-[34px] font-semibold">
            1
          </div>
          <div className="text-2xl font-semibold">Quote</div>
        </div>
        <div className="  flex flex-col gap-4 px-5 md:order-2 order-4">
          <div className="homecardHovericon text-white flex h-[60px] w-[60px] rounded-full justify-center items-center text-[34px] font-semibold">
            2
          </div>
          <div className="text-2xl font-semibold">Book</div>
        </div>
        <div className="  flex flex-col gap-4 px-5 md:order-3 order-7">
          <div className="homecardHovericon text-white flex h-[60px] w-[60px] rounded-full justify-center items-center text-[34px] font-semibold">
            3
          </div>
          <div className="text-2xl font-semibold">Track</div>
        </div>
        <div className="  flex flex-col gap-4 px-5 md:order-4 order-10">
          <div className="homecardHovericon text-white flex h-[60px] w-[60px] rounded-full justify-center items-center text-[34px] font-semibold">
            4
          </div>
          <div className="text-2xl font-semibold">Pay later</div>
        </div>
        <div className="secondary-bg p-6 h-full flex flex-col rounded-3xl border border-[var(--box-border-color)] md:order-5 order-2">
          <div className="mb-3">
            <ul className="list-disc">
              <li className="ml-[13px] text-sm font-semibold ">
                Berlin, Germany
              </li>
              <div className="border-l pl-[12px] py-2 ">
                <div className="bg-[var(--step-card-internal-color)] w-fit px-2 rounded text-[10px]">
                  105 km / 20h transit time
                </div>
              </div>
              <li className="ml-[13px] text-sm font-semibold">
                Paris, France, Germany
              </li>
            </ul>
          </div>
          <hr />
          <div className="py-3 flex gap-1.5">
            <span className="icon-Calendar text-lg" />
            <div className="text-sm font-semibold">Tue, 20-06 - Fri, 23-06</div>
          </div>
          <hr />
          <div className="py-3 flex flex-col">
            <div className="text-[var(--text-paragraph-color)] text-sm">
              Shipment price
            </div>
            <div className="text-2xl">&#8364; 200</div>
          </div>
        </div>
        <div className="secondary-bg p-6 flex flex-col rounded-3xl gap-3 h-full border border-[var(--box-border-color)] md:order-6 order-5">
          <div className="flex flex-col gap-1 ">
            <div className="text-sm">Pickup</div>
            <div className="flex justify-between p-2 border border-[var(--text-paragraph-color)] rounded-lg">
              <div className="text-[10px] my-auto">
                Tue, 20 June, 2021, 8:00 - 12:00
              </div>
              <span className="icon-Calendar my-auto text-sm"></span>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="text-sm">Delivery</div>
            <div className="flex justify-between p-2 border border-[var(--text-paragraph-color)] rounded-lg">
              <div className="text-[10px] my-auto">
                Tue, 20 June, 2021, 8:00 - 12:00
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <div className="text-sm">Cargo Type</div>
            <div className="flex justify-between p-2 border border-[var(--text-paragraph-color)] rounded-lg">
              <div className="text-[10px] my-auto">
                Tue, 20 June, 2021, 8:00 - 12:00
              </div>
              <IoCaretDown className=" my-auto text-sm"></IoCaretDown>
            </div>
          </div>
        </div>
        <div className="md:order-7 order-8">
                <Image src={theme==="dark" ? "/images/steps/step3dark.svg" : "/images/steps/step3light.svg"} height={254} width={270} alt="" className="h-full w-full "/>

        </div>
        <div className="secondary-bg p-6 flex flex-col rounded-3xl  h-full border border-[var(--box-border-color)] md:order-8 order-11">
          <div className="flex gap-3">
            <CiCircleCheck className="text-[#2684FB] text-2xl" />
            <div className="text-[10px] my-auto">
              Tue, 20 June, 2021, 8:00 - 12:00
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-6 border-l border-[#2684FB] pl-6 ml-3 mt-2">
            <div className="px-3 py-1 bg-[#2684FB] rounded-full w-fit text-sm">
              Transport completed
            </div>
            <div className="flex justify-between gap-1 text-[10px] w-2/3">
                <Image src={theme==="dark" ? "/images/Documentlight.svg" : "/images/Document.svg"} height={30} width={30} alt="" className="h-[30px] w-[30px] "/>
            Proof of delivery has been sent.
            </div>
            <div className="flex justify-between gap-1 text-[10px] w-3/4">
                <Image src={theme==="dark" ? "/images/DocumentAddLight.svg" : "/images/Document Add.svg"} height={30} width={30} alt="" className="h-[30px] w-[30px] "/>
                Invoice issued. Payment due in 14 days.
            </div>
          </div>
        </div>

        <div className="font-light text-[var(--step-color)] px-5 md:order-9 order-3 md:w-11/12 w-full">
          Provide basic transport information and receive instant quote
        </div>

        <div className="font-light text-[var(--step-color)] px-5 md:order-10 order-6 md:w-11/12 w-full">
          Fill in additional transport details and book your transport
        </div>
        <div className="font-light text-[var(--step-color)] px-5 md:order-11 order-9 md:w-11/12 w-full">
        Track your transport 24/7 and receive regular status updates
        </div>
        <div className="font-light text-[var(--step-color)] px-5 order-12  w-full md:w-11/12">
        You pay within 14 days from completed delivery or instantly online
        </div>
      </div>
    </div>
  );
}

export default Steps;
