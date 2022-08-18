//  Julie Adams 
// This module 

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



export const ChatEdit = () => {
    const [chat, assignChat] = useState({
        description: "",
        
    })
    
    const navigate = useNavigate()

    // this is the variable in which you stored the route parameter
    const { chatId } = useParams()

    //  Get the ticket state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/messages/${chatId}`)
            .then(response => response.json())
           .then((data) => {
                assignChat(data)
            })
    }, [chatId])


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // The fetch for the PUT request to replace the object being edited

        return fetch(`http://localhost:8088/serviceTickets/${chatId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(response => response.json())
            .then(() => 
                navigate("/chats")
            )
    
    }


    return (
        <>
    
        <h2 className="chatForm__title">Message</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="message">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={chat.message}
                    onChange={
                        (evt) => {
                            // this updates state with a modified copy
                            const copy = { ...chat }
                            copy.message = evt.target.value
                            assignChat(copy)
                        }
                    }>{chat.message}</textarea>
            </div>
        </fieldset>
        
        <button
            onClick={() => handleSaveButtonClick()}
            className="btn btn-primary">
            Save Edits
        </button>
    {/* </form> */}
    </>
    )
}