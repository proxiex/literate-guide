"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ContactThird() {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };
  return (
    <div className="lg:px-28 md:px-14  px-5 lg:py-16 md:py-10 py-6 primary-bg bg-transparent flex flex-col md:gap-16 gap-10 justify-center items-center font-inter h-full m-auto">
      <div className="lg:text-6xl md:text-4xl text-2xl md:w-2/3 w-full  text-center font-bold whitespace-nowrap">
        Thank You
      </div>
    
    </div>
  );
}

export default ContactThird;
