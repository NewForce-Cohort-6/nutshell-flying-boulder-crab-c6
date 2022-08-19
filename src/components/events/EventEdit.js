//Natalie Thiele
//This module creates form to PUT changes to event object into the database

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EventEdit = () => {

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    const [theEvent, editEvent] = useState({
        userId: nutShellUserObject.id,
        name: "",
        dateOf: "",
        location: ""
    })

    const { eventId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/events/${eventId}`)
            .then(response => response.json())
            .then((data) => {
                editEvent(data)
            })
    }, [eventId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const updatedEventObject = {
            userId: nutShellUserObject.id,
            name: theEvent.name,
            dateOf: theEvent.dateOf,
            location: theEvent.location
        }

        //Fetch for the PUT request to replace the object being edited
        fetch(`http://localhost:8088/events/${eventId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEventObject)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/home")
            })
    }

    return (
        <>
    <form className="eventForm">
        <h2 className="eventForm__title">Edit Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Update Event Name:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={theEvent.name}
                    onChange={
                        (evt) => {
                            // Update state with a modified copy
                            const copy = { ...theEvent }
                            copy.name = evt.target.value
                            editEvent(copy)
                        }
                    }>{theEvent.name}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Update Event Date in "yyyy-mm-dd" format:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={theEvent.dateOf}
                    onChange={
                        (evt) => {
                            // Update state with a modified copy
                            const copy = { ...theEvent }
                            copy.dateOf = evt.target.value
                            editEvent(copy)
                        }
                    }>{theEvent.date}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Update Event Location:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={theEvent.location}
                    onChange={
                        (evt) => {
                            // Update state with a modified copy
                            const copy = { ...theEvent }
                            copy.location = evt.target.value
                            editEvent(copy)
                        }
                    }>{theEvent.location}</textarea>
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
    </>
    )
}

