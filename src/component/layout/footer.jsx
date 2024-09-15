import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../../../assets/logo.png";
import message from "../../../assets/footer/Letter.svg";
import address from "../../../assets/footer/Map Point.svg";
import phone from "../../../assets/footer/Phone.svg";
import whatsapp from "../../../assets/footer/whatsapp.svg";

function Footer() {
  return (
    <footer className="bg-primary-dark  w-full lg:px-28 md:px-14  px-5 md:py-28 py-14">
      <div className=" w-full  grid lg:grid-cols-4 md:grid-cols-2 items-start gap-4">
        <div className="w-full">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={108}
              className="max-h-28 max-w-40 mb-5"
            />
          </Link>

          <p className="text-white w-full text-[#BABABA] text-sm">
            Lorem ipsum dolor sit amet, consectetur amore adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, consequat.
          </p>

          {/* <h4 className="text-white font-medium md:py-6 py-6 text-[clamp(24px,calc(24/1420*100vw),24px)]">
            Our Info
          </h4>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FiPhoneCall className="text-white" />

              <span className="text-white text-xs">
                01234567890
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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex bg-white rounded-full h-8 w-8 my-auto"
            >
              <PiInstagramLogoFill className=" m-auto text-black text-2xl" />
            </a>
          </div> */}
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
                      <div className="flex justify-between w-auto gap-4">
                        <span className="text-[#BABABA] text-sm">
                          <Image src={child.logo} />
                        </span>
                        <span className="text-[#BABABA] text-sm">
                          {child.title}
                        </span>
                      </div>
                    </Link>
                  ))
                : null}
            </div>
          );
        })}

        <div className="w-full lg:col-span-4 md:col-span-2 ">
          <div className="bg-[#454545] w-full h-[1px] my-[30px] sm:my-[60px]" />
          <div className="flex justify-between md:flex-row flex-col">
            <div className="flex justify-between w-[30%]">
              <p className="text-white text-sm">
                © 2024 Pose Promotions. 
              </p>
              <div className="text-white text-sm">
                Website Developed by Lintech Group
              </div>
            </div>
            <div className="text-white text-sm">
              <span>Terms & Conditions | Privacy Policy</span>
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
        title: "Bespoke",
        link: "/",
      },
      {
        title: "Size Guide",
        link: "/",
      },
      {
        title: "Contact Us",
        link: "/",
      },
    ],
  },

  {
    title: "Services",
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
        title: "Bespoke",
        link: "/",
      },
      {
        title: "Size Guide",
        link: "/",
      },
      {
        title: "Contact Us",
        link: "/",
      },
    ],
  },

  {
    title: "Services",
    children: [
      {
        logo: message,
        title: "info@posepromotion.co.uk",
        link: "/aboutUs",
      },
      {
        logo: whatsapp,
        title: "+44 121 817 7909",
        link: "/contactUs",
      },
      {
        logo: phone,
        title: "+44 7825 622005",
        link: "/terms&conditions",
      },
      {
        logo: address,
        title:
          "Office 1, Izabella House, 24-26 Regent Pl, Birmingham B1 3NJ, United Kingdom",
        link: "/privacyPolicy",
      },
    ],
  },
];
