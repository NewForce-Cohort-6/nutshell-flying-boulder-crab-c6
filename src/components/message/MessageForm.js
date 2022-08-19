import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MessageForm = ({changeState}) => {
   
     /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [message, updateMessages] = useState({
        userId: "",
        message: ""
       

    })

    /*
         the useNavigation() hook so redirect
        the user to the message list
    */

    const navigate = useNavigate()
    const localActiveUser = sessionStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // Create the object to be saved to the API
        const messageToSendToAPI = {
            userId: activeUserObject.id,
            message: message.message
            
        }

        // TODO: Perform the fetch() to POST the object to the API
      fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                fetch("http://localhost:8088/messages?_expand=user")
                .then(r => r.json())
                .then(newsList => changeState(newsList))
            });
    };

    return (
        <form className="messageForm">
           
            <fieldset>
                <div className="form-group">
                    <label htmlFor="contents"></label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type new message..."
                        value={message.message}
                        onChange={
                            (evt) => {
                                const copy = { ...message }
                                copy.message = evt.target.value
                                updateMessages(copy)
                            }
                        } />
                </div>
                <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">
                Submit Message
                </button>
            </fieldset>
        </form>
    )
}