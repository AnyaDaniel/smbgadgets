import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Calc = () => {
  return (
    <div className='p-20' >
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            <div className="hidden">
                <Image src="/img3.jpg" alt='' fill />
            </div>
            <div className="">
                <h3 className="text-[20px]">LOAD CALCULATOR</h3>
                <h1 className="text-[35px] text-[#023F5E] font-bold pt-3 leading-10 ">Don&apos;t know which size of inverter to go for? </h1>
                <p className=" pt-5 pb-8 ">Ever wondered about the optimal inverter capacity needed? Our easy to use &quot;Power Consumption Calculator&quot; will help you to know the exact total load requirements for your property!</p>
                 <Link href="/calculator" className="rounded-lg bg-[#023F5E] py-3 px-5 text-white max-w-fit hover:scale-y-105">Calculate Load</Link>
            </div>
        </div>
    </div>
  )
}

export default Calc