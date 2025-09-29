"use client";
import { useState } from "react";

export default function InnovationSection() {
  const [bgImg, setBgImg] = useState("/solar-img1.jpg"); // default background

  return (
    <div
      className="rounded-2xl h-[90vh] w-[80vw] bg-[#023F5E] mx-auto relative transition-all"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute w-full h-full top-0 left-0 rounded-2xl bg-black/30"></div>

      <div className="w-full h-full z-10 absolute top-0 left-0 rounded-2xl flex justify-center items-center">
        {/* Block 1 */}
        <div
          className="border-r-2 border-white py-10 px-5 text-white hover:bg-black/50 h-full flex flex-col justify-end group w-full cursor-pointer"
          onMouseEnter={() => setBgImg("/solar-img2.jpg")}
          onMouseLeave={() => setBgImg("/solar-img1.jpg")}
        >
          <h2 className="font-bold text-[25px] transition translate-y-40 duration-500 group-hover:translate-y-0">
            Innovation
          </h2>
          <p className="pt-10 text-[16px] transition duration-500 translate-y-48 scale-0 group-hover:translate-y-0 group-hover:scale-100">
            Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.
          </p>
        </div>

        {/* Block 2 */}
        <div
          className="border-r-2 border-white py-10 px-5 text-white hover:bg-black/50 h-full flex flex-col justify-end group w-full cursor-pointer"
          onMouseEnter={() => setBgImg("/solar-img3.jpg")}
          onMouseLeave={() => setBgImg("/solar-img1.jpg")}
        >
          <h2 className="font-bold text-[25px] transition translate-y-40 duration-500 group-hover:translate-y-0">
            Innovation
          </h2>
          <p className="pt-10 text-[16px] transition duration-500 translate-y-48 scale-0 group-hover:translate-y-0 group-hover:scale-100">
            Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.
          </p>
        </div>

        {/* Block 3 */}
        <div
          className="border-r-2 border-white py-10 px-5 text-white hover:bg-black/50 h-full flex flex-col justify-end group w-full cursor-pointer"
          onMouseEnter={() => setBgImg("/solar-img6.jpg")}
          onMouseLeave={() => setBgImg("/solar-img1.jpg")}
        >
          <h2 className="font-bold text-[25px] transition translate-y-40 duration-500 group-hover:translate-y-0">
            Innovation
          </h2>
          <p className="pt-10 text-[16px] transition duration-500 translate-y-48 scale-0 group-hover:translate-y-0 group-hover:scale-100">
            Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.
          </p>
        </div>

        {/* Block 4 */}
        <div
          className="py-10 px-5 text-white hover:bg-black/50 h-full flex flex-col justify-end group w-full cursor-pointer"
          onMouseEnter={() => setBgImg("/solar-img5.jpg")}
          onMouseLeave={() => setBgImg("/solar-img1.jpg")}
        >
          <h2 className="font-bold text-[25px] transition translate-y-40 duration-500 group-hover:translate-y-0">
            Innovation
          </h2>
          <p className="pt-10 text-[16px] transition duration-500 translate-y-48 scale-0 group-hover:translate-y-0 group-hover:scale-100">
            Trusted by leading PV professionals in 140+ countries, top corporations, homeowners and energy stakeholders across diverse applications.
          </p>
        </div>
      </div>
    </div>
  );
}
