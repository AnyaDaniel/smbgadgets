'use client'
import React, { useState } from 'react'

const Core = () => {
    const [isHoveredRed, setIsHoveredRed] = useState(false);
    const [isHoveredGreen, setIsHoveredGreen] = useState(false);
    const [isHoveredPink, setIsHoveredPink] = useState(false);
    const [isHoveredPurple, setIsHoveredPurple] = useState(false);
  return (
    <div className='p-20'>
        <h1 className="text-center text-[35px] text-[#023F5E] font-bold pb-10">OUR CORE POWER</h1>
        <div className="rounded-2xl h-[90vh] w-[80vw] bg-[#023F5E] mx-auto relative">
            <div className={`bg-red-950 w-full h-full z-5 transition absolute top-0 left-0 rounded-2xl ${isHoveredRed?'opacity-100':'opacity-0'}`} ></div>
            <div className={`bg-green-950 w-full h-full z-5 transition absolute top-0 left-0 rounded-2xl ${isHoveredGreen?'opacity-100':'opacity-0'}`}></div>
            <div className={`bg-pink-950 w-full h-full z-5 transition absolute top-0 left-0 rounded-2xl ${isHoveredPink?'opacity-100':'opacity-0'}`}></div>
            <div className={`bg-purple-950 w-full h-full z-5 transition absolute top-0 left-0 rounded-2xl ${isHoveredPurple?'opacity-100':'opacity-0'}`}></div>
            <div className=" w-full h-full z-10 transition absolute top-0 left-0 rounded-2xl flex justify-center items-center">
                <div className="border-r-2 bg-[url('/solar-img1.jpg')] bg-cover bg-center border-white py-10 px-5 text-white hover:bg-[#023F5E10] h-full flex flex-col justify-end group w-full"
                 onMouseEnter={() => setIsHoveredRed(true)}
                 onMouseLeave={() => setIsHoveredRed(false)}>
                    <h2 className="font-bold text-[25px] transition ease-in-out translate-y-40 duration-500 group-hover:translate-y-0">Innovation</h2>
                    <p className="pt-10 text-[16px] transition duration-500 ease-in-out translate-y-48 scale-0 -z-10 group-hover:translate-y-0 group-hover:scale-100 group-hover:block">Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.</p>
                </div>
                <div className="border-r-2 border-white py-10 px-5 text-white hover:bg-[#023F5E10] h-full flex flex-col justify-end group w-full"
                onMouseEnter={() => setIsHoveredGreen(true)}
                onMouseLeave={() => setIsHoveredGreen(false)}>
                    <h2 className="font-bold text-[25px] transition ease-in-out translate-y-40 duration-500 group-hover:translate-y-0">Innovation</h2>
                    <p className="pt-10 text-[16px] transition duration-500 ease-in-out translate-y-48 scale-0 -z-10 group-hover:translate-y-0 group-hover:scale-100 group-hover:block">Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.</p>
                </div>
                <div className="border-r-2 border-white py-10 px-5 text-white hover:bg-[#023F5E10] h-full flex flex-col justify-end group w-full"
                onMouseEnter={() => setIsHoveredPink(true)}
                onMouseLeave={() => setIsHoveredPink(false)}>
                    <h2 className="font-bold text-[25px] transition ease-in-out translate-y-40 duration-500 group-hover:translate-y-0">Innovation</h2>
                    <p className="pt-10 text-[16px] transition duration-500 ease-in-out translate-y-48 scale-0 -z-10 group-hover:translate-y-0 group-hover:scale-100 group-hover:block">Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.</p>
                </div>
                <div className="border-r-2 border-white py-10 px-5 text-white hover:bg-[#023F5E10] h-full flex flex-col justify-end group w-full"
                onMouseEnter={() => setIsHoveredPurple(true)}
                onMouseLeave={() => setIsHoveredPurple(false)}>
                    <h2 className="font-bold text-[25px] transition ease-in-out translate-y-40 duration-500 group-hover:translate-y-0">Innovation</h2>
                    <p className="pt-10 text-[16px] transition duration-500 ease-in-out translate-y-48 scale-0 -z-10 group-hover:translate-y-0 group-hover:scale-100 group-hover:block">Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Core