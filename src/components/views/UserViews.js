import { News } from "../news/News.js"
import { NewsList } from "../news/NewsList.js"
import {Route, Routes} from 'react-router-dom'
import { NewsForm } from "../news/NewsForm.js"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/home" element={<News />}></Route>
            <Route path="/createnews" element={<NewsForm />}></Route>
        </Routes>
    )
}