import './News.css'
import { NewsForm } from './NewsForm'
import { NewsList } from './NewsList'
import {Route, Routes} from 'react'

export const News = () => {
    return <>
    <section>
        <h2>News</h2>
        <NewsList />
        
    </section>
    </>
}