import React from 'react'
import TypesCard from './sub/TypesCard'

const Types = () => {
  return (
    <div className='bg-[#f5f7fa] py-10 text-center'>
        <p className="text-lg">Our Products</p>
        <h1 className="text-2xl font-bold text-[#023F5E] py-3">Which inverter is right for me?</h1>
        <p className="m-auto max-w-[50%] text-center">Do you need help in choosing the perfect Inverter? Look no further than Luminous, Nigeria&apos;s no.1 inverters. Before you choose the best inverter, analyze the power requirement of your need. We are here to guide you with all the information you need.</p>

        <div className="flex flex-wrap justify-center items-center gap-5 pt-10 px-10">
            <TypesCard img='' link='' heading='Low Capacity Inverters' text='The battery is at the heart of any power backup system. It is responsible for the performance and long life of the Inverter or UPS solution. That&apos;s why choosing the right battery is critical.'/>
            <TypesCard img='' link='' heading='High Capacity Inverters' text='The battery is at the heart of any power backup system. It is responsible for the performance and long life of the Inverter or UPS solution. That&apos;s why choosing the right battery is critical.'/>
            <TypesCard img='' link='' heading='Batteries' text='The battery is at the heart of any power backup system. It is responsible for the performance and long life of the Inverter or UPS solution. That&apos;s why choosing the right battery is critical.'/>
            <TypesCard img='' link='' heading='Solar Panels' text='The battery is at the heart of any power backup system. It is responsible for the performance and long life of the Inverter or UPS solution. That&apos;s why choosing the right battery is critical.'/>
            
        </div>
    </div>
  )
}

export default Types