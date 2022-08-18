
import { News } from "../news/News.js"
import { NewsList } from "../news/NewsList.js"
import {Route, Routes} from 'react-router-dom'
import { NewsForm } from "../news/NewsForm.js"
import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
import { NewsEdit } from "../news/NewsEdit.js"
//import { Tasks } from "../tasks/Tasks"


export const UserViews = () => {
    return (
        <Routes>

        <Route path="/home" element={<><News /><TaskDisplay /></>}></Route>
        <Route path="/createnews" element={<NewsForm />}></Route>
        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />
        <Route path="/home/news/:newsId/edit" element={<NewsEdit />}></Route>


        </Routes>
    )


}