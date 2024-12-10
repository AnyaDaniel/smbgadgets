import React from 'react'

const Mission = () => {
  return (
    <div>
        <div className="grid grid-flow-col grid-rows-1 grid-cols-2 px-40 py-20 justify-center items-center gap-32 h-full">
            <div className=" h-full">
                <div className="rounded-2xl p-10 shadow-md bg-[#f5f7fa] h-full">
                    <h1 className="text-[#023F5E] text-[30px] pb-5">Our Mission</h1>
                    <p className="">The mission of Systems & Machines Biz Limited is to maintain and continuously improve our reputation of providing services which meets or exceeds the performance, quality, reliability and safety requirement of our customers at a fair and competitive price.</p>
                </div>
            </div>
            <div className=" h-full">
                <div className="rounded-2xl p-10 shadow-md bg-[#f5f7fa] h-full">
                    <h1 className="text-[#023F5E] text-[30px] pb-5">Our Vision</h1>
                    <p className="">Our MissionOur vision is strategically focused on the provision of technical expertise for the delivery of End to End Turnkey IT, Power and Security Solution.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission