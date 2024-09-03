"use client";
import React, { useState } from "react";
import ControlTab from "../tab/ControlTab";

import { FaRoad, FaTruck, FaTruckFast } from "react-icons/fa6";
import { GiAirplaneDeparture, GiHandTruck } from "react-icons/gi";
import Image from "next/image";

import ServiceOfferGrid from "./serviceOfferGrid";

function ServiceOffer() {
  const [active, setactive] = useState(tabs[0]);

  return (
    <div className="lg:px-28 md:px-14  px-5 md:py-28 py-14 primary-bg font-sora flex flex-col md:gap-12 gap-6">
      <div className="flex justify-between">
        <ControlTab active={active} setactive={setactive} tabs={tabs} />
        <div className=" md:flex hidden text-[34px] font-semibold">Services We Offer</div>
      </div>
      <ServiceOfferGrid data={active?.items} />
    </div>
  );
}

export default ServiceOffer;

export const tabs = [
  {
    id: "1",
    title: "SECTION1",
    items: [
      {
        id: "01",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-road text-2xl m-auto "></span>,
        href: "/services/roadTransport"
      },
      {
        id: "02",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-ExpressTransport text-2xl m-auto"></span>,
        href: "/services/expressTransport"
      },
      {
        id: "03",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-Gloves text-2xl m-auto"></span>,
        href: "/services/whiteGloveRetreats"
      },
      {
        id: "04",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-handluggage text-2xl m-auto"></span>,
        href: "/services/whiteGloveRetreats"
      },
      {
        id: "05",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-Furniture text-2xl m-auto"></span>,
        href: "/services/highRangeFurniture"
      },
      {
        id: "06",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-SpecialDeliveries text-2xl m-auto"></span>,
        href: "/services/specialDeliveries"
      },
      {
        id: "07",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-InternationalTransport text-2xl m-auto"></span>,
        href: "/services/internationalTransport"
      },
      {
        id: "08",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-trolly text-2xl m-auto"></span>,
        href: "/services/logisticOrganization"
      },
    ]
  },
  {
    id: "2",
    title: "SECTION2",
    items: [
      {
        id: "01",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-road text-2xl m-auto "></span>,
        href: "/services/roadTransport"
      },
      {
        id: "02",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-ExpressTransport text-2xl m-auto"></span>,
        href: "/services/expressTransport"
      },
      {
        id: "03",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-Gloves text-2xl m-auto"></span>,
        href: "/services/whiteGloveRetreats"
      },
      {
        id: "04",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-handluggage text-2xl m-auto"></span>,
        href: "/services/whiteGloveRetreats"
      },
      {
        id: "05",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-Furniture text-2xl m-auto"></span>,
        href: "/services/highRangeFurniture"
      },
      {
        id: "06",
        label: "Card",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dignissimos tempora ipsa suscipit eligendi eius, accusamus vero adipisci deleniti, sequi non quae incidunt laboriosam porro temporibus beatae sint perferendis quidem pariatur commodi perspiciatis quos nisi debitis sed? Sed, voluptatem ex.",
        icon: <span className="icon-SpecialDeliveries text-2xl m-auto"></span>,
        href: "/services/specialDeliveries"
      },
    ],
  },
];
