import { EventsDisplay } from "../events/EventsDisplay"
import { News } from "../news/News"
import { TaskDisplay } from "../tasks/TaskDisplay"
import "./views.css"


export const PreLimView = () => {
        return (
            <div className="taskEventColumn">
                <TaskDisplay />
                <EventsDisplay />
                <News />
            </div>
        )
}