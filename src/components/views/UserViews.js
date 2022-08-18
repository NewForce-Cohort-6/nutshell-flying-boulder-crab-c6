
import { News } from "../news/News.js"
import { NewsList } from "../news/NewsList.js"
import {Route, Routes} from 'react-router-dom'
import { NewsForm } from "../news/NewsForm.js"
import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
import { NewsEdit } from "../news/NewsEdit.js"
import { EventForm } from "../events/EventsForm.js"
import { EventEdit } from "../events/EventEdit.js"
import { EventsDisplay } from "../events/EventsDisplay.js"
//import { Tasks } from "../tasks/Tasks"
//adding EventsDisplay to the route path home is breaking it


export const UserViews = () => {
    return (
        <Routes>

        <Route path="/home" element={<><News /><TaskDisplay /> <EventsDisplay/> </>}></Route>
        <Route path="/createnews" element={<NewsForm />}></Route>
        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />
        <Route path="/home/news/:newsId/edit" element={<NewsEdit />}></Route>
        <Route path="/home/create/event" element={<EventForm />} />
        <Route path="/home/:eventId/edit" element={<EventEdit />} />




        </Routes>
    )


}