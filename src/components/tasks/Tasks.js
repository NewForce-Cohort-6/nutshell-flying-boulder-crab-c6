//Natalie Thiele
//This module will generate display of user's tasks, including task name, expected completion date, and an affordance to mark task complete
//tasks should return all existing tasks from database and also the button/onclick that leads to task edit view

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Tasks = () => {
    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    //get all tasks by associated user
    useEffect(() => {
        return fetch(`http://localhost:8088/tasks?_expand=user&userId=${nutShellUserObject.id}`)
            .then(res => res.json())
            .then((taskArray) => {
                setTasks(taskArray)
            })
        },
        []
    )

    return (
    <>
    <article className="tasks">
        {
            tasks.map(task => <div className="task" key={`task--${task.id}`}>
                <section>{task.task}</section>
                <section>To be completed by: {task.completedBy}</section>
                <button onClick={() => navigate ("/editTask")}>Edit Task</button>
            </div>

            )
        }
    </article>
    </>
    )
}

//the button will navigate user to /editTask, but I'm not sure what to do with routes in UserViews. Might end up having similar problem that I'm having in TaskForm.js where we navigate there but see nothing.