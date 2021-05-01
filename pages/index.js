import React from 'react'
import Eventlist from '../components/Eventlist'

const HomePage = ({data}) => {
  

  return (
    <div>
      {
        <Eventlist items={data} />
      }
    </div>
  )
}


export async function getStaticProps() {

  console.log("Re render after 10 seconds at feature evnts")

  const res = await fetch('https://event-next-app-default-rtdb.firebaseio.com/events.json')

  let data = await res.json()

  data = data.filter((event) => event.isFeatured);

  return {
    props: {
     data
    },
    revalidate : 10 ,
  }
}


export default HomePage
