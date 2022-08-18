//Jacob Jude
//Form to create new news article

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewsForm = () => {
    const [article, update] = useState({
        url: "",
        title: "",
        synopsis: "",
        userId: 0
    })
    const navigate = useNavigate()
    const localActiveUser = sessionStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        //news to send to API
        const newstoSendToAPI = {
            userId: activeUserObject.id,
            url: article.url,
            title: article.title,
            synopsis: article.synopsis
        }

        fetch(`http://localhost:8088/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newstoSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate('/home')
        })
    }
    return (
        <form className="newsForm">
            <h2>New News Article</h2>
            <fieldset>
                <div>
                    <label htmlFor="url">URL: </label>
                    <input 
                    required 
                    autofocus 
                    type="text"
                    placeholder="insert URL here"
                    value={article.url}
                    onChange={
                        (evt) => {
                            const copy = {...article}
                            copy.url = evt.target.value
                            update(copy)
                        }
                    }></input>
                </div>
            </fieldset>
        </form>
    )
}