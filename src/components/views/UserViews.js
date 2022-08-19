



import { Outlet, Route, Routes } from "react-router-dom"

import { News } from "../news/News.js"
import { NewsList } from "../news/NewsList.js" 
import { NewsForm } from "../news/NewsForm.js"

import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
import { NewsEdit } from "../news/NewsEdit.js"


export const UserViews = () => {
   
    return (

    <Routes>
     

    <Route path="/home" element={<TaskDisplay />} />
    
        <Route path="/home" element={<><News /><TaskDisplay /></>}></Route>
        <Route path="/createnews" element={<NewsForm />}></Route>

        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />
        <Route path="/home/news/:newsId/edit" element={<NewsEdit />}></Route>

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
