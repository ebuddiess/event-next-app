import { useRouter } from 'next/router'
import {Fragment } from 'react'

import {getEventById} from '../../dummy-data'
import EventSummary from '../../components/UI/event-detail/event-summary'
import EventLogistics from '../../components/UI/event-detail/event-logistics'
import EventContent from '../../components/UI/event-detail/event-content'







function Event () {

  const router = useRouter()
  const eventid = router.query.eventId
  
  const event = getEventById(eventid)

 
  if(!event){
    return <h1> NO EVENT </h1>
  }


    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} address={event.location} image= {event.image} imageAlt={event.title} />
        <EventContent> </EventContent>
      </Fragment>
      )
}

export default Event
