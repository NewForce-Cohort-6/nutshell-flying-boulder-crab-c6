//  Julie Adams 
// This module looks at inital state, then requests api data and updates state and displays requested info 


import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Chat } from "./Chat"
import "./Chat.css"

// initial state and set state
export const ChatList = () => {
    const [chats, setChats] = useState([])    
    //  const [filteredChats, setFiltered] = useState([])
    //  const [emergency, setEmergency] = useState(false)
    //  const [openOnly, updateOpenOnly] = useState(false)
      const navigate = useNavigate()

    const localActiveUser = localStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)



    const getAllChats = () => {
        fetch(`http://localhost:8088/messages?_expand=user&userId=${activeUserObject.id}`)
                    .then(response => response.json())
                    .then((chatArray) => {
                        setChats(chatArray)
                    })
    }
    
        // useEffect(
        //     () => {
        //        getAllChats()
                
        //             fetch(`http://localhost:8088/users`)
        //             .then(response => response.json())
        //             .then((userArray) => {
        //                 setUsers(userArray)
        //             })
    
                
        //     },
        //     [] // When this array is empty, you are observing initial component state
        // )
    
        // useEffect(
        //     () => {           
        //         if (honeyUserObject.staff) {
        //         // for employees 
        //          setFiltered(tickets)
        //          }
                 
        //          else {
        //         //  for customers
        //            const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
        //           setFiltered(myTickets)
        //          }
        //     },
        //     [tickets]
        // )
    
        useEffect(
            () => {
                if (openOnly) {
                const openTicketArray = tickets.filter(ticket => 
                    ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
                )
                setFiltered(openTicketArray)
                }
                else {
                    const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)             
                    setFiltered(myTickets)
                }
            },
            [ openOnly ]
        )
    
        return <>
        {
            honeyUserObject.staff
        ? <>
        <button onClick={ () => { setEmergency(true) } } >Emergency Only</button>
        <button onClick={ () => { setEmergency(false) } } >Show All</button>
            </>
           : <>
       <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
       <button onClick={() => updateOpenOnly(true)}> Open Ticket</button>
       <button onClick={() => updateOpenOnly(false)}> All My Tickets</button>
            </>
        }
    
        <h2>Messages</h2>
    
        <article className="messages">
            {
                filteredChats.map(
                    (chat) => <Chat users={users}
                    getAllChats={getAllChats} 
                    currentUser={activeUserObject} 
                    chatObject={chat} />
             )
        }
        
    
       </article> 
       </>
    
    }
    





      // useEffect = (() => {
    // fetch(`http://localhost:8088/messages`)
    //             .then(response => response.json())
    //             .then((chatArray) => {
    //                 setChats(chatArray)
    //             })
         
    //     },
    //     []) //  initial component state

    // return (
    // <>
    
    // <h2>Messages</h2>

    // <section className="messages">
    //     {
    //        chats.map (item => {
    //         return <>
    //         <div className= "message">
    //             <p>{item.message}</p>
    //          </div>
    //         </>
    //        })
    // }
    

//    </section> 
//    </>
//     )
// }



