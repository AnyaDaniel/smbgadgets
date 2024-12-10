import React from 'react'
import Hero from '../components/Hero'
import Assist from '../components/services/Assist'
import Usage from '../components/main/Usage'

const page = () => {
  return (
    <div>
      <Hero title='Services' img="/servers.png"/>
      <Assist/>
      <Usage/>
    </div>
  )
}

export default page