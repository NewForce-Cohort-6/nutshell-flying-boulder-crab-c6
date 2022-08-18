//Jacob Jude
//This module will fetch all news articles, map them into html, and export them

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./News.css"

export const NewsList = () => {
    //state and set state for all articles
    const [news, setNews] = useState([])

    //get and store active user for later
    const localActiveUser = sessionStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser) 
    const navigate = useNavigate()

    //fetch and store array of news articles
    useEffect(() => {
        fetch('http://localhost:8088/news')
        .then((response) => response.json())
        .then((newsArray) => {
            setNews(newsArray)
        })
    },[])
    return (
        <>
        <section className="news--list">
            {
                news.map(item => {
                    return <>
                    <div className="news--item">
                        <h3 className="item--title">{item.title}</h3>
                        <p>{item.synopsis}</p>
                        <a href={item.url}>Link to article</a>
                        
                    </div>
                    
                    </>
                })
            }
        <button onClick={() => navigate('/createnews')}>Create Ticket</button>
        </section>
        </>
    )
}