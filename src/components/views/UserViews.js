import {  Route, Routes } from 'react-router-dom'
  import { ChatForm } from "../chat/ChatForm"
//  import { ChatEdit } from "../chat/ChatEdits"
// import { ChatList } from "../chat/ChatList"
import {Chat} from '../chat/Chat.js'

export const UserViews = () => {
    // return <h1>Welcome to the Dashboard!</h1>
    return (
    <Routes>
    <Route path="/" element={<Chat />}></Route>
</Routes>)
        
        
    

}


 // <Routes>
                           
        //       {/* <Route path="chats/edit/:messageId" element={ <ChatEdit/> } /> */}
        //      {/* <Route path="chats" element={ <ChatList/>}  />                */}
        //       {/* <Route path="chat/create" element={ <ChatForm /> } />
        //              */}
        // </Routes>