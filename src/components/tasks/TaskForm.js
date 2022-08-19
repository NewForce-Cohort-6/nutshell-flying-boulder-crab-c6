//Natalie Thiele
//This module displays a form which posts a new task object to database

import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const TaskForm = () => {
    //this was copied over from HoneyRae's and I wonder what needs to change or if we need an object like this or not. What was it doing specifically in HoneyRae?
    const [task, update] = useState({
        // task: "",
        completed: false
    })

    const navigate = useNavigate()

    const localNutshellUser = sessionStorage.getItem("activeUser")
    const nutShellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
            
        const taskToSendToApi = {
                userId: nutShellUserObject.id,
                task: task.task,
                completed: task.completed,
                completedBy: task.completedBy
            }
    
        
            return fetch(`http://localhost:8088/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(taskToSendToApi)
            })
                .then(res => res.json())
                .then(() => {
                    navigate("/home")
            })

        
    }

    return (<>
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Task Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of task"
                        value={task.task}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.task = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date to Complete:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Date"
                        value={task.completedBy}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.completedBy = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Task
            </button>
        </form>
    </>
    )
}
