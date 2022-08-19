import { EventsDisplay } from "../events/EventsDisplay"
import { MessageList } from "../message/MessageList"
import { News } from "../news/News"
import { TaskDisplay } from "../tasks/TaskDisplay"
import "./views.css"


export const PreLimView = () => {
        return (
            <div className="taskEventColumn">
                <TaskDisplay />
                <MessageList />               
                <EventsDisplay />
                <News />
            </div>
        )
}