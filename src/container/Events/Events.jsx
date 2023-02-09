import React from 'react'
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants'
import './Events.css'

const EventCard =  ({event: { imgUrl, title, subtitle }}) => (
  <div className="app__events-card">
    <img src={imgUrl} alt="events" />
    <div className="app__events-card_content">
      <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>

    </div>
  </div>
)

const Events = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='events'>
      <div className="app__wrapper_info">
        <SubHeading title="Anomaly Firetruck & Food Truck"/>
        <h1 className='headtext__cormorant'>Our Events</h1>

        <div className="app__events">
          {data.events.map((event) => <EventCard event={event} key={event.title}/>)}
        </div>
        <div className="button__events">
          <a href='https://calendar.google.com/calendar/embed?src=8e7a725279c13df0b07c8f933ac848bc591c215620eb401eac8d5eab88278b2c%40group.calendar.google.com&ctz=America%2FNew_York' target='_blank'><button className='custom__button'>More Events!</button></a>
        </div>
      </div>


      <div className="app__wrapper_img">
        <img src={images.truck} alt="firetruck" />
      </div>
    </div>
  )
}

export default Events
