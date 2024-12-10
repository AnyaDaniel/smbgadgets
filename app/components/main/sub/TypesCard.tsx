import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface TypesCardProps {
    img: string,
    heading: string,
    text: string,
    link: string,
}

const TypesCard = ({img, heading, text, link}:TypesCardProps) => {
  return (
    <div  className='p-5 rounded-2xl shadow-md bg-[#00000010] transition-all hover:scale-105 h-full'>
        <Link href={link}>
        <div className="">
            <Image src={img} alt='' width={10} height={10} className='rounded-tr-2xl rounded-bl-2xl'/>
        </div>
        <div className="pt-5 text-left">
            <h1 className="text-2xl text pb-3">{heading}</h1>
            <p className="text-[16px] max-w-[270px] my-auto">{text}</p>
        </div>
    </Link>
    </div>
  )
}

export default TypesCard