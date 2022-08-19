//Natalie Thiele
//This module will generate display of user's events, including name of event, date of event,  location of event, in chrono order(?), with larger/bolder styling for the "next" event in list. Will also display an Edit button associated with each event in list.

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./events.css"

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
            events.map(theEvent => 
                <div className="event" key={`event--${theEvent.id}`}>
                    <section>Event: {theEvent.name}</section>
                    <section>Event Date: {theEvent.dateOf}</section>
                    <section>Event Location: {theEvent.location}</section>
                    <button onClick={() => navigate (`/home/edit/${theEvent.id}`)}>Edit Event</button>
                </div>
                )
        }
    </>

    )
}

//chrono order, but I'm not sure how to highlight next event. get instructor help if there's time.