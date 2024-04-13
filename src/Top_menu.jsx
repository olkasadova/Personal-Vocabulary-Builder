import React from "react";
import './Top_menu.css';
import 'bootstrap/dist/css/bootstrap.css';


export default function Top_menu (){
    return(
        <div className="menu-container">
            <ul className="nav justify-content-center">
                <li claclassNamess="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    )
}