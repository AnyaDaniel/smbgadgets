import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface UsageCardsProps {
    link: string,
    text: string,
    img: string,
  }

const UsageCards = ({ link, text, img}:UsageCardsProps) => {
  return (
    <div>
        <Link href={link} className='hover:bg-[#dddddd80] group'>
            <div className={`bg-[#bfbfbf] shadow-lg w-[200px] h-[150px] p-3 relative rounded-2xl`}>
                <p className="font-normal text-md text-right text-black">{text}</p>
                <Image src={img} alt='explore img' width={100} height={100} className='bottom-2 left-2 absolute  group-hover:left-4 transition-all duration-300 ease-in-out' />
            </div>
        </Link>
    </div>
  )
}

export default UsageCards