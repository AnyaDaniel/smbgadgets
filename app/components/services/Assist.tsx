import React from 'react'
import TypesCard from '../main/sub/TypesCard'

const Assist = () => {
  return (
    <div className='bg-[#f5f7fa] py-10 text-center'>
        <h1 className="text-4xl font-bold text-[#023F5E] py-3">We have a Pan Nigeria service setup, always ready to assist you</h1>

        <div className="grid grid-flow-col grid-rows-1 grid-cols-3 justify-center items-center gap-10 pt-10 px-40">
            <TypesCard link='' heading='Inspection & Load Estimation' text='Our technical team will work with you to determine what kind of inverter you need, depending on your load, usage conditions, priority appliances and budget. If required, we can arrange for a site inspection and load estimation, which will help you to better determine the kind of backup solution you need.' icon={undefined} />
            <TypesCard link='' heading='Delivery & Installation' text='We recommend that you always use a Simba Service approved installer for your installation. Our installers will help you understand how the inverter works, and under what conditions it should operate. There are certain guidelines such as which appliances should not be used with an inverter system, as well as certain tips to ensure that your batteries last longer. Your installer will help you understand these so that you can get the most out of your purchase. We also provide delivery services if required.' icon={undefined} />
            <TypesCard link='' heading='Premium Service & Support' text='Our technical team will work with you to determine what kind of inverter you need, depending on your load, usage conditions, priority appliances and budget. If required, we can arrange for a site inspection and load estimation, which will help you to better determine the kind of backup solution you need.' icon={undefined} />
        </div>
    </div>
  )
}

export default Assist