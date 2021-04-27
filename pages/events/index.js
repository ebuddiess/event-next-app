
import Eventlist from '../../components/Eventlist'
import {getAllEvents} from '../../dummy-data'





const Events = () => {
  
  const AllEvents = getAllEvents()

  return (
    <div>
      {
        <Eventlist items={AllEvents} />
      }
    </div>
  )
}

export default Events
