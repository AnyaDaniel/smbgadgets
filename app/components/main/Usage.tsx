import React from 'react'
import UsageCards from './sub/UsageCards'

const Usage = () => {
  return (
    <div className='bg-[#dedede] p-20 '>
        <h1 className="text-[35px] font-bold text-center text-[#023F5E]">WHERE TO USE</h1>
        <p className="pt-3 text-center text-black"> Our products have received favor from both domestic and foreign markets. They are now widely exporting to 100 countries.</p>

        <div className="flex flex-wrap justify-center items-center gap-5 pt-10">
            <UsageCards link='' text='Homes & Estates' img='/house.png' />
            <UsageCards link='' text='Offices' img='/office-building.png' />
            <UsageCards link='' text='Industry' img='/factory.png' />
            <UsageCards link='' text='Medical' img='/medical-symbol.png' />
            <UsageCards link='' text='Telcom' img='/telecommunications.png' />
            <UsageCards link='' text='Data Center & Servers' img='/servers.png' />
        </div>
    </div>
  )
}

export default Usage