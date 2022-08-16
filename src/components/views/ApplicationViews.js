import {UserViews } from "./UserViews"


export const ApplicationViews = () => {
	
    const localActiveUser = sessionStorage.getItem("activeUser")
    const activeUserObject = JSON.parse(localActiveUser)     
    
    if (activeUserObject) {

        return <UserViews />
    }

}