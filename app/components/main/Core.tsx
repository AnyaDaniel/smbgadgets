"use client";
import { useState } from "react";

export default function InnovationSection() {
  const [bgImg, setBgImg] = useState("/solar-img1.jpg"); // default background

  return (
    <div
  className="rounded-2xl overflow-hidden min-h-[70vh] w-[90vw] md:h-[90vh] md:w-[80vw] bg-[#023F5E] mx-auto relative transition-all duration-500"
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 rounded-2xl bg-black/40"></div>

  {/* Content Blocks */}
  <div className="absolute inset-0 rounded-2xl z-10 flex flex-col md:flex-row justify-center items-stretch">
    {/* Block Template */}
    {[
      { img: "/solar-img2.jpg", title: "Innovation" },
      { img: "/solar-img3.jpg", title: "Efficiency" },
      { img: "/solar-img6.jpg", title: "Sustainability" },
      { img: "/solar-img5.jpg", title: "Reliability" },
    ].map((block, index) => (
      <div
        key={index}
        className={`group text-white flex-1 flex flex-col justify-end cursor-pointer hover:bg-black/50 transition-all duration-500 ${
          index < 3 ? "md:border-r-2 border-white/40" : ""
        } border-b md:border-b-0 border-white/20 md:border-white/0 py-8 px-6`}
        onMouseEnter={() => setBgImg(block.img)}
        onMouseLeave={() => setBgImg("/solar-img1.jpg")}
      >
        <h2 className="font-bold text-xl md:text-2xl translate-y-10 md:translate-y-40 transition-all duration-500 group-hover:translate-y-0">
          {block.title}
        </h2>
        <p className="pt-4 md:pt-10 text-sm md:text-base transition-all duration-500 translate-y-16 md:translate-y-48 scale-0 group-hover:translate-y-0 group-hover:scale-100">
          Trusted by leading PV professionals in 140+ countries, top corporations,
          homeowners, and energy stakeholders across diverse applications.
        </p>
      </div>
    ))}
  </div>
</div>

  );
}
