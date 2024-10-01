import React from "react";

export default function Header ({user}){
    return(
    <div class="user"> 
        <div>
            <h2> Welcome, {user} </h2>
        </div>
        
    </div>
    )
}