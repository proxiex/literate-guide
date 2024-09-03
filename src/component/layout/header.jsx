"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { IoClose, IoMenu } from "react-icons/io5";

function Header({ setMenu }) {
  
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="md:py-5 lg:px-20 md:px-10 px-5 py-4  md:fixed top-0 z-50 w-full ">
            <div className="  flex rounded-full justify-between md:py-4 md:px-6  gradient-color md:backdrop-blur-md">
              <div>
                <Image
                  src={"/images/logo.png"}
                  alt=""
                  height={60}
                  width={72}
                  className="max-h-16 max-w-20"
                />
              </div>
              <div className=" md:flex justify-between lg:gap-10 gap-7 my-auto  hidden  h-fit rounded-full">
                <Link href={"/"} className="my-auto font-medium">
                  Home
                </Link>
                <Link href={"/aboutUs"} className="my-auto font-medium">
                  About us
                </Link>
                
                {/* <Link href={"/"} className="my-auto font-medium">Gallery</Link> */}
                <Link href={"/cases"} className="my-auto font-medium">Cases</Link>
                <Link href={"/contact"}
                  type="button"
                  className="bg-white px-4 py-2 text-[#161616] rounded-full "
                  // onClick={() => toggleTheme()}
                >
                  Let’s Talk
                </Link>
              </div>
              <Disclosure.Button className=" md:hidden flex ">
                {open ? (
                  <IoClose
                    className="text-3xl my-auto"
                    onClick={() => setMenu(false)}
                  />
                ) : (
                  <IoMenu
                    className="text-3xl my-auto"
                    onClick={() => setMenu(true)}
                  />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="primary-bg px-5">
              <Link
                href={"/"}>
                  <div
                className="text-base font-medium py-4 paragraph-color"
              >
                Home
                </div>
              </Link>
              <hr />
              <Link href={"/aboutUs"}>
                <div className="text-base font-medium py-4 paragraph-color">
                  About Us
                </div>
              </Link>
              <hr />
             
              <hr />
              {/* <Link href={"/"} className="text-base font-medium py-4 paragraph-color">
                Gallery
              </Link> */}
              
              <Link href={"/cases"} >
                <div className="text-base font-medium py-4 paragraph-color">

                Cases
                </div>
              </Link>
              <hr />
              <Link href={"/contactUs"} type="button" className="primary-button w-full my-6">
                Book Now
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
