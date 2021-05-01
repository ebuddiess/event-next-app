import {Fragment } from 'react'
import React , {useEffect , useState} from 'react'
import useSWR from 'swr'


import EventSummary from '../../components/UI/event-detail/event-summary'
import EventLogistics from '../../components/UI/event-detail/event-logistics'
import EventContent from '../../components/UI/event-detail/event-content'







function Event (props) {
   
   const [event, setevent] = useState(props.event)

   const { data , error } = useSWR('https://event-next-app-default-rtdb.firebaseio.com/events.json')

  useEffect(() => {
    if(data) {
      const eventnew = data.find((event) => event.id === props.id);
      setevent(eventnew)
    }
   }, [data])

    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image= {event.image} imageAlt={event.title} />
        <EventContent> </EventContent>
      </Fragment>
      )
}

export async function getStaticProps(context) {
  console.log("Re render after 10 seconds at event id  evnts")
  const res = await fetch('https://event-next-app-default-rtdb.firebaseio.com/events.json')
  const data = await res.json()

  const {params} = context ;
  const id = params.eventId ;

  const event = data.find((event) => event.id === id);

  if(!event) {
    return {
      notFound : true 
    }
  }

  return {
    props: {
     event ,
     id : id
    }, // will be passed to the page component as props
    revalidate : 10 
  }
}


export async function getStaticPaths (){

  return {
    paths : [ 
      { params : { eventId : 'e1' } 
      }
      
    ],
    fallback : "blocking"
  }
}


export default Event
