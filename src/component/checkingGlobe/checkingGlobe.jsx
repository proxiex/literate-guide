import React from 'react'
import Globe from "./globe";

const CheckingGlobe = () => {
  return (
    <div className=" relative flex md:h-full h-[330px] w-full max-w-[548px] items-center justify-center overflow-hidden rounded-lg  bg-background px-40   md:pb-60 md:shadow-xl">
      <span className="md:mb-0 mb-56 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-6xl text-5xl pt-10 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">   
         Globale
      </span>
       <Globe/>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  )
}

export default CheckingGlobe