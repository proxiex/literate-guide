"use client"
import Image from "next/image";
import React from "react";
import { PiDiamondBold } from "react-icons/pi";
import { motion } from "framer-motion";
import CheckingGlobe from "../checkingGlobe/checkingGlobe";
import Link from "next/link";

function ImageGrid() {
  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg grid grid-cols-3 gap-6 font-sora">
      <motion.div initial={{
        x: "-100%",
      }}
      className="md:col-span-1 col-span-3"
      whileInView={{
        x: 0,
        transition: { duration: 0.2 },
      }}>
        <img
          src={"https://via.placeholder.com/208x384"}
          alt=""
          height={280}
          width={384}
          className="object-cover rounded-2xl xl:max-h-[280px] lg:max-h-[300px] md:max-h-[307px] max-h-[224px]  w-full"
        />
      </motion.div>
      <motion.div  
       initial={{
        x: "-100%",
      }}
      
      whileInView={{
        x: 0,
        transition: { duration: 0.5 },
      }}
       className="xl:p-10 lg:p-6 p-6 gradient-color-card flex flex-col gap-3 rounded-2xl md:col-span-1 col-span-3 xl:max-h-[280px] h-full">
        <div className="lg:text-[32px] text-[34px] font-semibold">229+</div>
        <div className="lg:text-2xl text-xl font-semibold">Business Market</div>
        <div className="paragraph-color lg:text-sm text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est officiis numquam totam unde excepturi deserunt eveniet ipsam quisquam illo doloribus.
        </div>
      </motion.div>
      <motion.div initial={{
        x: "-100%",
      }}
      whileInView={{
        x: 0,
        transition: { duration: 0.8 },
      }} className="xl:p-10 lg:p-6 p-6 gradient-color-card flex flex-col gap-3 rounded-2xl md:col-span-1 col-span-3 xl:max-h-[280px] h-full">
        <div className="lg:text-[32px] text-[34px] font-semibold">88M</div>
        <div className="lg:text-2xl text-xl font-semibold">Generate Revenue</div>
        <div className="paragraph-color lg:text-sm text-xs">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero hic eaque amet incidunt, earum atque, ad voluptatum placeat totam nihil eum doloremque assumenda at excepturi impedit facilis repellendus tempore dolor perferendis vel deleniti quibusdam. Fuga necessitatibus officiis modi rerum soluta!
        </div>
      </motion.div>
     

     {/* 2nd row  */}
     <motion.div initial={{
        x: "-100%",
      }}
      whileInView={{
        x: 0,
        transition: { duration: 0.4 },
      }} className="xl:p-10 lg:p-6 p-6 gradient-color-card flex flex-col gap-3 rounded-2xl md:col-span-1 col-span-3 xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[224px] h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col md:gap-4 gap-5">
            <div className="font-semibold  text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="text-[32px] font-semibold md:block hidden">
              <span className="card-text-primary text-[28px] leading-[20px]"> Lorem</span>
              <br /> <span className="card-text-secondary text-[28px]">ipsum</span>
            </div>
            <div className="text-[32px] font-semibold md:hidden block">
              <span className="card-text-primary text-[28px] leading-[20px]">Lorem, ipsum.</span>
            
            </div>
          </div>

         <Link href={'/contact'}>
          <button type="button" className="primary-button md:mb-10 mt-4 w-fit text-[14px]">
            Contact us
          </button>
         </Link> 
          
        </div>
        <div className="mt-auto ml-auto w h-fit rounded-br-2xl ">
 
        </div>
        
      </motion.div>


    {/* Globe Rotate */}
      <motion.div initial={{
        x: "-100%",
      }}
      whileInView={{
        x: 0,
        transition: { duration: 0.8 },
      }} className=" gradient-color-card  md:flex md:flex-col gap-4 rounded-2xl md:col-span-1 col-span-3 xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[400px]">
        
        <div className="xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[494px]">
          <CheckingGlobe/>
        </div>
      </motion.div>



      <motion.div initial={{
        x: "-100%",
      }}
      whileInView={{
        x: 0,
        transition: { duration: 0.8 },
      }} className="md:pt-[8px] pt-2 md:px-6 px-6 bg-gradient-to-tr from-[#0A538F] from-70%   to-[#82A7C6] text-white flex flex-col xl:max-h-[300px] lg:max-h-[305px] md:max-h-[307px] max-h-[300px] md:gap-2 gap-2 rounded-2xl md:col-span-1 col-span-3">
        <div className=" font-semibold md:text-[30px] text-[25px]">Lorem, ipsum.</div>
        <div className="flex flex-col gap-[3px] pb-3">
          {data.map((item) => (
            <div className="flex gap-1 text-sm font-light ">
              <PiDiamondBold className="my-auto font-light"/>
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ImageGrid;

const data = [
  "lorem ipsum",
  "lorem ipsum",
  "lorem ipsum",
  "lorem ipsum",
  "lorem ipsum",
  "lorem ipsum",
];
