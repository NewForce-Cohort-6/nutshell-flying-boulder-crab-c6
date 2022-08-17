import { Outlet, Route, Routes } from "react-router-dom"
import { TaskDisplay } from "../tasks/TaskDisplay"
import { TaskForm } from "../tasks/TaskForm"
//import { Tasks } from "../tasks/Tasks"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Welcome to the Dashboard!</h1>

                    <section>
                        <TaskDisplay />
                        {/* <Events /> */}
                    </section>

                    <Outlet />
                </>
            }>

           

            </Route>
    </Routes>


    )
}


//parking this for later:
//     <Route path="createTask" element={ <TaskForm /> } />
// notes: I'm not sure I understand Routes and Route and how they're going to work.
//If I do not include any other <Route> in this component, my button navigate-to pages work, but if I add a route they stop working. idk.
//see notes in Tasks, TaskForm, TaskDisplay about buttons and navigate?

//also see message I got in devtools:

/*router.ts:11 You rendered descendant <Routes> (or called `useRoutes()`) at "/home" (under <Route path="/home">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="/home"> to <Route path="/home/*">. */

//this pertains to app.js. I added the /* to /home in app.js and the error goes away BUT it doesn't resolve my create task form not-showing-up issue.