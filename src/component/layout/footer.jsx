import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <footer className="bg-primary-dark  w-full lg:px-28 md:px-14  px-5 md:py-28 py-14">
      <div className=" w-full  grid lg:grid-cols-4 md:grid-cols-2 items-start gap-6">
        <div className="">
          <Link href={"/"}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={150}
              height={108}
              className="max-h-28 max-w-40"
            />
          </Link>

          <h4 className="text-white font-medium md:py-6 py-6 text-[clamp(24px,calc(24/1420*100vw),24px)]">
            Our Info
          </h4>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FiPhoneCall className="text-white" />

              <span className="text-white text-xs">
                01234567890
                {/* <br />
                (Fri-Sat) */}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <IoMailOutline className="text-white" />
              <span className="text-white text-xs">info@test.it</span>
            </div>
          </div>
          <h4 className="text-white font-medium  md:py-6 text-[clamp(24px,calc(24/1420*100vw),24px)]">
            Social Links
          </h4>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/" target="_blank">
              <MdOutlineFacebook className="text-4xl text-white" />
            </a>
            {/* <AiFillTwitterCircle className="text-4xl text-white" /> */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex bg-white rounded-full h-8 w-8 my-auto"
            >
              <PiInstagramLogoFill className=" m-auto text-black text-2xl" />
            </a>
          </div>
        </div>

        {quickLinks.map((item, i) => {
          return (
            <div
              className="flex flex-col items-start justify-center mb-2.5 gap-3"
              key={`${i}`}
            >
              <h4 className="text-white pb-3 sm:pb-4 text-2xl font-semibold">
                {item.title}
              </h4>
              {item?.children?.length
                ? item.children.map((child, indx) => (
                    <Link href={child.link}>
                      <span className="text-[#BABABA] text-sm">
                        {child.title}
                      </span>
                    </Link>
                  ))
                : null}
            </div>
          );
        })}

        <div className="w-full lg:col-span-4 md:col-span-2 ">
          <div className="bg-[#454545] w-full h-[1px] my-[30px] sm:my-[60px]" />
          <div className="flex justify-between md:flex-row flex-col">
            <p className="text-white text-sm">
              © 2024. All rights reserved.
            </p>
            <div className="text-white text-sm">
              Website Developed by Lintech Group
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const quickLinks = [
  {
    title: "Quick Link",
    children: [
      {
        id: "11",
        title: "Home",
        link: "/",
      },
      {
        title: "About US",
        link: "/",
      },
      {
        title: "Gallery",
        link: "/",
      },
    ],
  },

  {
    title: "Services",
    children: [
      {
        title: "Service1",
        link: "/services/roadTransport",
      },
      {
        title: "Service2",
        link: "/services/expressTransport",
      },
      {
        title: "Service3",
        link: "/services/whiteGloveRetreats",
      },
      {
        title: "Service4",
        link: "/services/whiteGloveRetreats",
      },
      {
        title: "Service5",
        link: "/services/highRangeFurniture",
      },
      {
        title: "Service6",
        link: "/services/specialDeliveries",
      },
      {
        title: "Service7",
        link: "/services/internationalTransport",
      },
      {
        title: "Service8",
        link: "/services/logisticOrganization",
      },
    ],
  },

  {
    title: "Company",
    children: [
      {
        title: "About Us",
        link: "/aboutUs",
      },
      {
        title: "Contact Us",
        link: "/contactUs",
      },
      {
        title: "Terms & Conditions",
        link: "/terms&conditions",
      },
      {
        title: "Privacy Policy",
        link: "/privacyPolicy",
      },
      {
        title: "Cookies Policy",
        link: "/cookies",
      },
    ],
  },
];
