import EventItem from './EventItem'
import eventList from './event-list.module.css'



export default function Eventlist({items}) {
    return ( 
        <ul className={eventList.list}>
            {items.map(item => <EventItem event={item} key={item.id}/> )}
        </ul>
    )
}
