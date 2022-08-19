//  Julie Adams 


import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { MessageList } from './MessageList'

export const Message =({message, changeState}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [updateMessage, setUpdateMessage] =useState(message)
    
    const loggedInUser = JSON.parse(localStorage.getItem("activeUser"))
    
    
    
        return (
            
                isEdit && loggedInUser.id === message.userId
                ?
    
                <section className="message" key={`message--${message.id}`}>
                <form
                onSubmit={e =>{
                    e.preventDefault();
    
            return fetch(`http://localhost:8088/messages/${message.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateMessage)
            }).then(()=>{
                fetch("http://localhost:8088/messages?_expand=user")
                    .then(r => r.json())
                    .then(newList => {
                        changeState(newList)
                        setIsEdit(false)
                    })
            })
                }}><input value={updateMessage.message}
                 onChange={
                    (evt) => {
                        const copy = { ...updateMessage }
                        copy.message = evt.target.value
                        setUpdateMessage(copy)
                    }
                } />
                </form>
                {/* <Link to={`/messages/${message.id}/edit`}>Edit</Link> */}
    
            </section>
    
                :
            <section className="message" key={`message--${message.id}`}>
                                <div onDoubleClick={()=> setIsEdit(true)}>
                                    {message?.user?.userName}: 
                                    {message.message}
                                    </div>
                                {/* <Link to={`/messages/${message.id}/edit`}>Edit</Link> */}
    
                            </section>
            
        )
    }
 