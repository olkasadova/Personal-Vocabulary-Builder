import React from "react";

export default function Header ({user}){
    return(
    <div className="user"> 
        <div>
            <h2> Welcome, {user} </h2>
        </div>
        
    </div>
    )
}