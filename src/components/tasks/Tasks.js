//Natalie Thiele
//This module will generate display of user's tasks, including task name, expected completion date, and an affordance to mark task complete
//tasks should return all existing tasks from database and also the button/onclick that leads to task edit view

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Tasks = () => {
    const [tasks, setTasks] = useState([])
    const [user, setUser] = useState([])

    const navigate = useNavigate()


    return (<>

    </>)

}







