import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/about/Intro'
import Mission from '../components/about/Mission'
import Expertise from '../components/about/Expertise'

const page = () => {
  return (
    <div>
        <Hero title='About' img="/servers.png" />
        <Intro/>
        <Mission/>
        <Expertise/>
        
    </div>
  )
}

export default page