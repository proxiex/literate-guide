import Image from 'next/image'
import React from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'

function TransportVideoSection() {
  return (
    <div className='primary-bg  md:py-28 py-14 font-sora  '>
        <div className='relative'>
        <div className='absolute  z-40 top-1/2 left-1/2'>
        <BsPlayCircleFill className="m-auto  md:text-6xl text-2xl text-[#6DA7D8] bg-white rounded-full " />
        </div>
        <Image src={"/images/aboutustruck.png"} alt=' ' height={602} width={900} className='md:h-screen h-40 w-full object-cover filter grayscale aspect-video' />
        </div>
    </div>
  )
}

export default TransportVideoSection