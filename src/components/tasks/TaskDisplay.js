//Natalie Thiele
//This module will create the task section's header, task display, and "Create New Task" button

import { useNavigate } from "react-router-dom"

export const TaskDisplay = () => {


    const navigate = useNavigate

    return (<>
        <header>
            <h2>Tasks</h2>
        </header>
        <section>
            <p>Display tasks here // this will have the button for editing // one more component for an edit form reroute</p>
        </section>
        <section>
            <button onClick={() => navigate ("/createTask")}>Create New Task</button>
        </section>
        
    </>)
}