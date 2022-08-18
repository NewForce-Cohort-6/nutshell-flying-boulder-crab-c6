//Natalie Thiele
//This module will generate display of user's events, including name of event, date of event,  location of event, in chrono order(?), with larger/bolder styling for the "next" event in list. Will also display an Edit button associated with each event in list.

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Events = () => {
    const [events, setEvents] = useState([])

    const navigate = useNavigate()

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    //get all events by associated user for initial view
    useEffect(() => {
        return fetch(`http://localhost:8088/events?_expand=user&_sort=dateOf&userId=${nutShellUserObject.id}`)
            .then(res => res.json())
            .then((eventArray) => {
                setEvents(eventArray)
            })
        },
        []
    )

    return (
    <>
        {
            events.map(event => 
                <div className="event" key={`event--${event.id}`}>
                    <section>Event: {event.name}</section>
                    <section>Event Date: {new Date (event.dateOf)}</section>
                    <section>Event Location: {event.location}</section>
                </div>)
        }
    </>

    )
}
