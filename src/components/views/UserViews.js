


import { Outlet, Route, Routes } from "react-router-dom"
  import { ChatForm } from "../chat/ChatForm"
//  import { ChatEdit } from "../chat/ChatEdits"
// import { ChatList } from "../chat/ChatList"
import {Chat} from '../chat/Chat.js'
import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
//import { Tasks } from "../tasks/Tasks"

export const UserViews = () => {
    // return <h1>Welcome to the Dashboard!</h1>
    return (
    <Routes>
    <Route path="/" element={<Chat />}></Route>

    <Route path="/home" element={<TaskDisplay />} />
        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />

</Routes>)
        
        
    

}


 // <Routes>
                           
        //       {/* <Route path="chats/edit/:messageId" element={ <ChatEdit/> } /> */}
        //      {/* <Route path="chats" element={ <ChatList/>}  />                */}
        //       {/* <Route path="chat/create" element={ <ChatForm /> } />
        //              */}
        // </Routes>

// import { Outlet, Route, Routes } from "react-router-dom"
// import { EditTask } from "../tasks/EditTask"
// import { TaskDisplay } from "../tasks/TaskDisplay"
// import { TaskForm } from "../tasks/TaskForm"
// //import { Tasks } from "../tasks/Tasks"

// export const UserViews = () => {
//     return (
//         <Routes>
//         <Route path="/home" element={<TaskDisplay />} />
//         <Route path="/home/create/task" element={<TaskForm />} />
//         <Route path="/home/:taskId/edit" element={<EditTask />} />


//         </Routes>
//     )

// }

