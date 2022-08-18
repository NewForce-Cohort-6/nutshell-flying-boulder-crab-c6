//  Julie Adams 
// This module

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ChatList } from './ChatList'


 export const Chat = ({ chatObject, currentUser, getAllChats }) => {
   
    //  find the assiged user for the current message
    
    let assignedUser = null
    
    if (chatObject.userChats.length > 0) {
      const chatUserRelationship = chatObject.userChats[0]
      assignedUser = users.find(user => user.id === chatUserRelationship.userId)
        }
    
        // find the user profile object for the current user
    const chatUser = users.find(user => user.userId === currentUser.id)
    
    
    
    // function that determines if the current user can close the ticket
    const canClose = () => {
        if (chatUser?.id === assignedUser?.id && chatObject.dateCompleted === "" && currentUser.user) {
            return <button onClick={closeTicket} className="ticket__finish">Finish</button>    
            }
        else {
            return ""
        }
    }
    
    
    const deleteButton = () => {   
        if (!currentUser.user) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/messages${chatObject.id}` , {
                    method: "DELETE"
                })
                     .then(() => {
                        getAllChats()
                    })
            }} className="chat__delete">Delete</button>    
            }
        else {
            return ""
        } 
    }
    
    // // function that updates the ticket with a new date completed
    // const closeChat = () => {
    //     const copy = {
    //         userId: chatObject.userId,
    //        message: chatObject.message,
    //         dateCompleted: new Date()
    //     }
    
    // return fetch(`http://localhost:8088/messages${chatObject.id}`, {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(copy)
    // })
    //     .then(response => response.json())
    //     .then(getAllChats)
    // }
    
    // const buttonOrNoButton = () => {
    //     if (currentUser.user) {
    //         return <button
    //                 onClick={() => {
    //                     fetch(`http://localhost:8088/messages`, {
    //                         method: "POST",
    //                         headers: {
    //                             "Content-Type": "application/json"
    //                         },
    //                         body: JSON.stringify({    
    //                             userId: user.id,
    //                             messageId: chatObject.id                        
    //                         })
    //                     })
    //                     .then(response => response.json())
    //                     .then(() => {
    // // get the state from the API
    //                         getAllChats()
    //                     })
    //                 }}
    //                 >Claim</button>
    //     }
    //     else {
    //         return ""
    //     }
    // }
    
        
    
    {return <section className="chat">
        <header className="chat__header"> 
    
    {
        currentUser.user 
            ? `Messaage ${chatObject.id}`
            : <Link to={`/chats/edit/${chatObject.id}`}>Message {chatObject.id}</Link>
    
    }
    </header>
    <section>{chatObject.messaage}</section>
    
    <footer className="chat__footer">
        {
            chatObject.messages.length
                ? `Written by ${assignedUser !== null ? assignedUser?.user?.userName : ""}`
                : buttonOrNoButton()
        }
    {
        canClose()
    }
    {
        deleteButton()
    }
        </footer>
    </section> 
    }
    }
