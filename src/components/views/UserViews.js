



import { Outlet, Route, Routes } from "react-router-dom"
  import { ChatForm } from "../chat/ChatForm"
//  import { ChatEdit } from "../chat/ChatEdits"
// import { ChatList } from "../chat/ChatList"
import {Chat} from '../chat/Chat.js'
import { News } from "../news/News.js"
import { NewsList } from "../news/NewsList.js"
import {Route, Routes} from 'react-router-dom'
import { NewsForm } from "../news/NewsForm.js"

import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
import { NewsEdit } from "../news/NewsEdit.js"


export const UserViews = () => {
   
    return (

    <Routes>
    <Route path="/" element={<Chat />}></Route>

    <Route path="/home" element={<TaskDisplay />} />

    

        <Route path="/home" element={<><News /><TaskDisplay /><Chats /></>}></Route>
        <Route path="/createnews" element={<NewsForm />}></Route>

        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />
        <Route path="/home/news/:newsId/edit" element={<NewsEdit />}></Route>

</Routes>
        )
    }
        
 
{/*                            
              {/* <Route path="chats/edit/:messageId" element={ <ChatEdit/> } /> */}
           {/* <Route path="chats" element={ <ChatList/>}  />                */}
              {/* <Route path="chat/create" element={ <ChatForm /> } />
                     */}
        



{/* // export const UserViews = () => {



}
 */}
