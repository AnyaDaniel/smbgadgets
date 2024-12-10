import React from 'react'

export interface Heroprop{
    title: string,
    img: string,
}

const Hero = ({title, img}: Heroprop) => {
  return (
    <div>
         <div className={`w-full pt-28 pb-10 bg-url('${img}') px-20`}> {/* make the bg color into bg picture */}
            <h1 className="text-white text-4xl font-bold">{title}</h1>
        </div>
    </div>
  )
}

export default Hero