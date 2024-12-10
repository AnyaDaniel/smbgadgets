import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#023F5E] text-white w-full'>
        <div className='w-full py-2 sm:py-10 px-5 flex justify-around items-center border-b-4 border-white'>

                <div className="">
                    <h1 className="font-bold text-[28px]">How can we help you?</h1>
                    <p className="text-[20px] ">Contact our representative</p>
                </div>

                <Link href={''} className='rounded-lg bg-slate-600 py-3 px-5 text-white max-w-fit hover:scale-y-105' >Contact Us</Link>

                <div className="flex gap-32">
                <p className="text-[45px]">/</p>

                    <div className="">
                        <p className="text-[20px]">Join the conversation</p>
                        <div className="flex items-center justify-between"></div>
                    </div>
                </div>
        </div>

        <div className="border-b-2 border-white text-center py-5">
            <p className="text-[18px]">&copy; smbgadgets / <Link href={''} >Privacy Policy</Link> / <Link href={''} >Term & Conditions</Link></p>
        </div>
        <div className="py-2">
            <p className="text-[16px] text-slate-300 text-center">Made by <Link href={''} className='text-white' >Net-trix Solutions</Link></p>
        </div>
        
    </div>
  )
}

export default Footer