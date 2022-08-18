//Natalie Thiele
//This module will create the event section's header, event display, and "Create New Event" button

import { useNavigate } from "react-router-dom"
import { Events } from "./Events"

export const EventsDisplay = () => {

    const navigate = useNavigate()

    return(
        <>
        <article className="eventDisplay">
            <header>
                <h2>Events</h2>
            </header>
            <section>
                <Events />
            </section>
            <section>
                <button onClick={() => navigate ("/home/create/event")}>Create New Event</button>
            </section>

        </article>
        </>
    )
}