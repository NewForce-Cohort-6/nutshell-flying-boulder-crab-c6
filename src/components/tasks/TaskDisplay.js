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
            <button onClick={() => navigate ("/createTask")}>Create New Task</button>
        </section>
        
        </article>
    </>)
}

//no idea why this button does navigate us to /createTask, see notes in UserViews.js and TaskForm.js