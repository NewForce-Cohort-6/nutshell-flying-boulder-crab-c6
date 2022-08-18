//Natalie Thiele
//This module displays a form which posts a new event object to database

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EventForm = () => {
    const [event, update] = useState({
        name: ""
    })

    const navigate = useNavigate()

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
            
        const eventToSendToApi = {
                userId: nutShellUserObject.id,
                event: event.name,
                dateOf: new Date(event.dateOf),
                location: event.location
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
        <form className="taskForm">
            <h2 className="taskForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of event"
                        value={event.name}
                        onChange={
                            (evt) => {
                                const copy = {...event}
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
                        value={event.date}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.date = evt.target.value
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
                        value={event.location}
                        onChange={
                            (evt) => {
                                const copy = {...event}
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
