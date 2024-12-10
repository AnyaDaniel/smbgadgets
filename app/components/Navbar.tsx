import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full sm:py-10 px-5 flex justify-between items-center bg-transparent absolute top-0 z-50'>
        <nav className="flex w-full screen-max-width">
            <Image src={''} alt='SMB' width={14} height={18} />

                <ul className="flex flex-1 justify-center max-sm:hidden">
                    <li className="px-5 tex-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                        <Link href={'/'}>Home </Link>
                    </li>
                    <li className="px-5 tex-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                        <Link href={''}>Products </Link>
                    </li>
                    <li className="px-5 tex-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                        <Link href={''}>Load Calculator </Link>
                    </li>
                    <li className="px-5 tex-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                        <Link href={'/services'}>Services </Link>
                    </li>
                    <li className="px-5 tex-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                        <Link href={'/partners'}>Partners </Link>
                    </li>
                    <li className="px-5 tex-sm cursor-pointer text-gray-400 hover:text-white transition-all">
                        <Link href={'/about'}>About Us </Link>
                    </li>
                </ul>

            <div className="px-5 tex-sm cursor-pointer text-gray-300 hover:text-white transition-all">
                <Link href={'/contact'}>Contact Us </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar