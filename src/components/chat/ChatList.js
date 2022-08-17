//  Julie Adams 
// This module looks at inital state, then requests api data and updates state and displays requested info 


import {useCallback, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import { Chat } from "./Chat"
import "./Chat.css"

// initial state and set state
export const ChatList = () => {
    const [chats, setChats] = useState([])    
    //  const [filteredChats, setFiltered] = useState([])
    // const [emergency, setEmergency] = useState(false)
    // const [openOnly, updateOpenOnly] = useState(false)
    //  const navigate = useNavigate()

    const localActiveUser = localStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)

   

    useEffect = (() => {
    fetch(`http://localhost:8088/messages`)
                .then(response => response.json())
                .then((chatArray) => {
                    setChats(chatArray)
                })
         
        },
        []) //  initial component state

    return (
    <>
    
    <h2>Messages</h2>

    <section className="messages">
        {
           chats.map (item => {
            return <>
            <div className= "message">
                <p>{item.message}</p>
             </div>
            </>
           })
    }
    

   </section> 
   </>
    )
}



