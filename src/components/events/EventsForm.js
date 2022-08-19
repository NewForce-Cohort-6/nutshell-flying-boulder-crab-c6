//Natalie Thiele
//This module displays a form which posts a new event object to database

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EventForm = () => {

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    const [theEvent, update] = useState({
        userId: nutShellUserObject.id,
        name: "",
        dateOf: "yyyy-mm-dd",
        location: ""
    })

    const navigate = useNavigate()



    const handleSaveButtonClick = (event) => {
        event.preventDefault()
            
        const eventToSendToApi = {
                userId: nutShellUserObject.id,
                name: theEvent.name,
                dateOf: theEvent.dateOf,
                location: theEvent.location
            }
    
        
            return fetch(`http://localhost:8088/events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(eventToSendToApi)
            })
                .then(res => res.json())
                .then(() => {
                    navigate("/home")
            })

        
    }

    return (<>
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of event"
                        value={theEvent.name}
                        onChange={
                            (evt) => {
                                const copy = {...theEvent}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date of event in "yyyy-mm-dd" format:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Date"
                        value={theEvent.dateOf}
                        onChange={
                            (evt) => {
                                const copy = {...theEvent}
                                copy.dateOf = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Location of Event:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Location"
                        value={theEvent.location}
                        onChange={
                            (evt) => {
                                const copy = {...theEvent}
                                copy.location = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Event
            </button>
        </form>
    </>
    )
}
