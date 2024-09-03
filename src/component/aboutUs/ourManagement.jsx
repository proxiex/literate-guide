import Image from "next/image";
import React from "react";

function OurManagement() {
  return (
    <div className="primary-bg lg:px-28 md:px-14  px-5 md:py-28 py-14 font-sora ">
      <div className="md:text-4xl text-2xl font-semibold">Our Management</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12">
      {data.map((item)=>
        <div className="gradient-color-card pl-8 pt-8 rounded-lg flex flex-col gap-2 filter hover:filter-none grayscale">
            <div className="text-2xl font-semibold">
                {item.name}
            </div>
            <div className="secondary-text">
                {item.title}
            </div>
            <div className="h-full">
                <Image src={item.image} alt="" height={300} width={300} className=" ml-auto h-[300px]   object-cover " /> 
            </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default OurManagement;

const data = [
  {
    name: "Marco Carla",
    title: "CEO/FOUNDER",
    image: "/images/management/1.png",
  },
  {
    name: "Carla Christian",
    title: "Chief Operating Officer",
    image: "/images/management/2.png",
  },
  {
    name: "Donata",
    title: "Accountant",
    image: "/images/management/3.png",
  },
  {
    name: "Inverni Eleonora",
    title: "Export specialist",
    image: "/images/management/4.png",
  },
  {
    name: "Bresciani Alessia",
    title: "Export specialist",
    image: "/images/management/5.png",
  },
  {
    name: "Munini Alessandro",
    title: "Development Manager",
    image: "/images/management/6.png",
  },
  {
    name: "Cavallaro Antonio Edgardo",
    title: "Driver, Loading worker & furniture fitter",
    image: "/images/management/7.png",
  },
  {
    name: "Florelli Mario",
    title: "Driver - Loading worker & furniture fitter",
    image: "/images/management/8.png",
  },
  {
    name: "Capuano Giovann",
    title: "Driver - Loading worker & furniture fitter",
    image: "/images/management/9.png",
  },
  {
    name: "Galizia Stefano",
    title: "Driver - Loading worker & furniture fitter",
    image: "/images/management/10.png",
  },
  {
    name: "Ursol Serghei",
    title: "Driver - Loading worker & furniture fitter",
    image: "/images/management/11.png",
  },
  {
    name: "Lorusso Vincenzo",
    title: "Driver & Loading worker",
    image: "/images/management/12.png",
  },
  {
    name: "Cappelletti Nicolo",
    title: "Driver & Loading worker",
    image: "/images/management/13.png",
  },
];
