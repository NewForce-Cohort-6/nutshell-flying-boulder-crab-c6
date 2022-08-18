//Jacob Jude
//This module allows users to edit News form

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const NewsEdit = () => {
    const [news, update] = useState({
        url: "",
        title: "",
        synopsis: ""
    })
    const {newsId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/news/${newsId}`)
        .then(response => response.json())
        .then(data => {
            update(data)
        })
    }, [newsId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        fetch(`http://localhost:8088/news/${newsId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
        .then(response => response.json())
        .then(() => {
            navigate('/home')
        })
    }
    return (<form className="newsForm">
    <h2>New News Article</h2>
    <fieldset>
        <div>
            <label htmlFor="url">URL: </label>
            <input 
            required 
             autoFocus
            type="text"
            placeholder="insert URL here"
            value={news.url}
            onChange={
                (evt) => {
                    const copy = {...news}
                    copy.url = evt.target.value
                    update(copy)
                }
            }></input>
        </div>
    </fieldset>
    <fieldset>
        <div>
        <label htmlFor="Article Title">Title: </label>
            <input 
            required 
            autoFocus 
            type="text"
            placeholder="insert title here"
            value={news.title}
            onChange={
                (evt) => {
                    const copy = {...news}
                    copy.title = evt.target.value
                    update(copy)
                }
            }></input>
        </div>
    </fieldset>
    <fieldset>
        <div>
        <label htmlFor="synopsis">Synopsis: </label>
            <input 
            required 
            autoFocus 
            type="text"
            placeholder="insert title here"
            value={news.synopsis}
            onChange={
                (evt) => {
                    const copy = {...news}
                    copy.synopsis = evt.target.value
                    update(copy)
                }
            }></input>
        </div>
    </fieldset>
    
    <button 
    onClick={(event) => handleSaveButtonClick(event)}
    className="btn btn-primary">
        Save Edits
    </button>
</form>)
}