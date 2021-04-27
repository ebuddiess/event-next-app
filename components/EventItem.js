import eventStyles from './event-item.module.css'
import Button from './UI/Button'
import DateIcon from './UI/icons/date-icon'
import dateIcon from './UI/icons/date-icon'
import addressIcon from './UI/icons/address-icon'
import AddressIcon from './UI/icons/address-icon'
import arrowRightIcon from './UI/icons/arrow-right-icon'
import ArrowRightIcon from './UI/icons/arrow-right-icon'







export default function EventItem({event}) {
    const event_id = `/events/${event.id}`
    return (
        <li className={eventStyles.item}>
            <img     src={event.image} alt={event.title} />

            <div className={eventStyles.content}>
                <div>
                  <h2> {event.title} </h2> <div className={eventStyles.date}> <time> <DateIcon /> {new Date(event.date).toLocaleDateString("en-US" ,{day :"numeric" , month:"long",year:'numeric'})} </time></div>
                </div>

                <div className={eventStyles.address}><address><AddressIcon />{event.location}</address></div>
            </div>
            <div className={eventStyles.actions}>
                <Button link={event_id}>Explore <span className={eventStyles.icon}><ArrowRightIcon /></span></Button>
            </div>
        </li>
    )
}
