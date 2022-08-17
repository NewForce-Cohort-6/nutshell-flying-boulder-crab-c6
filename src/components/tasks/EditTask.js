//Natalie Thiele
//This  module creates form to PUT changes to task object into the database

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

    export const EditTask = () => {
        // TODO: This state object should not be blank
        const [task, editTask] = useState({
            task: "",
            completed: false
        })
    
        // Variable in which we stored the route parameter
        const { taskId } = useParams()
        const navigate = useNavigate()
    
        // Get the ticket state from the API.
        useEffect(() => {
            fetch(`http://localhost:8088/tasks/${taskId}`)
                .then(response => response.json())
                .then((data) => {
                    editTask(data)
                })
        }, [ taskId ])
    
        const handleSaveButtonClick = (event) => {
            event.preventDefault()
    
            //Fetch for the PUT request to replace the object being edited
            fetch(`http://localhost:8088/tasks/${task.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
                .then(response => response.json())
                .then(() => {
                    navigate("/home")
                })
        }
    
    
        return (
            <>
        <form className="taskForm">
            <h2 className="taskForm__title">Edit Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Update Description:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "10rem"
                        }}
                        className="form-control"
                        value={task.task}
                        onChange={
                            (evt) => {
                                // Update state with a modified copy
                                const copy = { ...task }
                                copy.task = evt.target.value
                                editTask(copy)
                            }
                        }>{task.task}</textarea>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Update Date to Complete:</label>
                    <textarea
                        required autoFocus
                        type="text"
                        style={{
                            height: "10rem"
                        }}
                        className="form-control"
                        value={task.completedBy}
                        onChange={
                            (evt) => {
                                // Update state with a modified copy
                                const copy = { ...task }
                                copy.completedBy = evt.target.value
                                editTask(copy)
                            }
                        }>{task.completedBy}</textarea>
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Save Edits
            </button>
        </form>
        </>
        )
    }