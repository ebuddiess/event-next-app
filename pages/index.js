import React from 'react'
import Eventlist from '../components/Eventlist'


import {getFeaturedEvents} from '../dummy-data'



const HomePage = () => {
  
  const FeatureEvents = getFeaturedEvents()

  return (
    <div>
      {
        <Eventlist items={FeatureEvents} />
      }
    </div>
  )
}

export default HomePage
