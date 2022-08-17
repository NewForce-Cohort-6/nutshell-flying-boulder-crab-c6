import { Outlet, Route, Routes } from "react-router-dom"
import { EditTask } from "../tasks/EditTask"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
//import { Tasks } from "../tasks/Tasks"

export const UserViews = () => {
    return (
        <Routes>
        <Route path="/home" element={<TaskDisplay />} />
        <Route path="/home/create/task" element={<TaskForm />} />
        <Route path="/home/:taskId/edit" element={<EditTask />} />


        </Routes>
    )

}