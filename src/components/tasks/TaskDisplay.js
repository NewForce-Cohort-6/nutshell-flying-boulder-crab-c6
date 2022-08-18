//Natalie Thiele
//This module will create the task section's header, task display, and "Create New Task" button

import { useNavigate } from "react-router-dom"
import { Tasks } from "./Tasks"
import "./tasks.css"

export const TaskDisplay = () => {


    const navigate = useNavigate()

    return (<>
        <article className="taskDisplay">

        <header>
            <h2>Tasks</h2>
        </header>
        <section>
            <Tasks />
        </section>
        <section>
            <button onClick={() => navigate ("/home/create/task")}>Create New Task</button>
        </section>
        
        </article>
    </>)
}