



import { Outlet, Route, Routes } from "react-router-dom"

import { News } from "../news/News.js"
import { NewsList } from "../news/NewsList.js" 
import { NewsForm } from "../news/NewsForm.js"

import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
import { NewsEdit } from "../news/NewsEdit.js"

import {MessageForm}  from "../message/MessageForm"
 import { MessageEdit } from "../message/MessageEdit"
 import { MessageList } from "../message/MessageList"
import {Message} from "../message/Message"

export const UserViews = () => {
   
    return (

    <Routes>
     

    <Route path="/home" element={<TaskDisplay />} />
    
        <Route path="/home" element={<Message />}/>
        <Route path="/createnews" element={<NewsForm />}/>

        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />
        <Route path="/home/news/:newsId/edit" element={<NewsEdit />}/>
       
        <Route path="/home/messages/:messageId/edit/" element={ <MessageEdit/> } /> 
        <Route path="/taco/cheeese/beans" element={ <MessageList/>}  /> 
        <Route path="home/create/message" element={ <MessageForm /> } /> 



</Routes>
        )
    }
        
 
{/*                            
              {/* <Route path="messages/edit/:messageId" element={ <MessageEdit/> } /> */}
           {/* <Route path="messages" element={ <MesssageList/>}  />                */}
              {/* <Route path="messages/create" element={ <MessageForm /> } />
                     */}
        



{/* // export const UserViews = () => {



}
 */}
