//Natalie Thiele
//This module creates form to PUT changes to event object into the database

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EditEvent = () => {
    const [event, editEvent] = useState({
        name: ""
    })

    const { eventId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/events/${taskId}`)
            .then(response => response.json())
            .then((data) => {
                editEvent(data)
            })
    }, [ eventId ])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //Fetch for the PUT request to replace the object being edited
        fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
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
                    value={event.name}
                    onChange={
                        (evt) => {
                            // Update state with a modified copy
                            const copy = { ...event }
                            copy.name = evt.target.value
                            editEvent(copy)
                        }
                    }>{event.name}</textarea>
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
                    value={event.date}
                    onChange={
                        (evt) => {
                            // Update state with a modified copy
                            const copy = { ...event }
                            copy.date = evt.target.value
                            editEvent(copy)
                        }
                    }>{event.date}</textarea>
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
                    value={event.location}
                    onChange={
                        (evt) => {
                            // Update state with a modified copy
                            const copy = { ...event }
                            copy.location = evt.target.value
                            editEvent(copy)
                        }
                    }>{event.location}</textarea>
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

