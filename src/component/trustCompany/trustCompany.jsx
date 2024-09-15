"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee';
import { ThemeContext } from '../layout/layout';

function TrustCompany() {
    const [images, setImages] = useState(imagesLight)

   
  return (
    <div className='lg:py-28 md:py-20 py-14 primary-bg '>
        <h1 className='md:text-4xl text-2xl font-semibold md:mb-16 mb-10 m-auto lg:w-1/2 w-4/5  font-sora text-center'>Trusted by top global brands for decades.</h1>
        <Marquee className="md:mb-[20px] mb-[8px] relative overflow-x-hidden">
        {images?.map((item, index) => {
          return (
            <div key={index.toString()} className=" md:mr-5 mr-2 flex md:max-w-full max-w-[110px] ">
                {/* <div className=''> */}

              <img src={item} alt='' height={108} width={200} className='m-auto md:max-h-full max-h-[60px]' />
                {/* </div> */}
            </div>
          );
        })}
      </Marquee>
        <Marquee className="mb-[20px] relative  overflow-x-hidden" direction='right'>
        {images?.reverse()?.map((item, index) => {
          return (
            <div key={index.toString()} className="md:mr-5 mr-2 flex md:max-w-full max-w-[110px]">
            

          <img src={item} alt='' height={108} width={200} className='m-auto md:max-h-full max-h-[60px]' />
            
        </div>
          );
        })}
      </Marquee>
    </div>
  )
}

export default TrustCompany

const imagesLight= [
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",
    "https://via.placeholder.com/200x108",

  ]