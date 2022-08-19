//Natalie Thiele
//This module will generate display of user's incomplete tasks, including task name, expected completion date, and buttons to edit task and to mark task complete


import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

//add {getAllTasks} 
export const Tasks = () => {
    const [tasks, setTasks] = useState([])

    const navigate = useNavigate()

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    //get all tasks by associated user for initial view
    useEffect(() => {
        return fetch(`http://localhost:8088/tasks?_expand=user&_sort=completedBy&userId=${nutShellUserObject.id}`)
            .then(res => res.json())
            .then((taskArray) => {
                setTasks(taskArray)
            })
        },
        []
    )

    //get all tasks to refresh the view when completeTask function runs
    const getAllTasks = () => {
        fetch(`http://localhost:8088/tasks?_expand=user&userId=${nutShellUserObject.id}`)
    .then(response => response.json())
    .then((tasksArray) => {
        setTasks(tasksArray)
    })
    }

    //function that updates task with new completed state
    const completeTask = (task) => {
        const copy = {
            userId: task.userId,
            task: task.task,
            completed: true,
            completedBy: task.completedBy
        }
        fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(copy)
        })
            .then(response => response.json())
            .then(getAllTasks)
    }

    //Return a filtered, mapped list of tasks. Filter only shows incomplete tasks. Map shows task description and task complete-by date. Map also creates an Edit and a Complete button. Clicking Edit button navigates user to an edit form. Clicking Complete button updates "completed" value on task object in database to "true," removing it from display list. 
    return (
    <>
    <article className="tasks">
        {
           
            tasks.filter(task => task.completed === false).map(task => <div className="task" key={`task--${task.id}`}>
                <section>{task.task}</section>
                <section>To be completed by: {task.completedBy}</section>
                <button onClick={() => navigate (`/home/${task.id}/edit`)}>Edit Task</button>
                <button onClick={() => completeTask(task)}>Task Complete</button>
            </div>

            )
        }
    </article>
    </>
    )
}