
import Eventlist from '../../components/Eventlist'

const Events = ({data}) => {
  
  return (
    <div>
      {
        <Eventlist items={data} />
      }
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://event-next-app-default-rtdb.firebaseio.com/events.json')
  const data = await res.json()
  console.log("Re render after 60 seconds atall evnts")
  
  
  return {
    props: {
     data 
    },
    revalidate : 60 // will be passed to the page component as props
  }
}

export default Events
