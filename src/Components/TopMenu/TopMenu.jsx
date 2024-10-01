import React from "react";
import './TopMenu.css';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


export default function TopMenu (){
    return(
        <div className="menu-container">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="www.google.com" target="_blank">LINK</a>
                </li>
                <li className="nav-item">
                <Link to ="/add" target="_blank"> Add Your Words </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Useful Links</a>
                </li>
                <li className="nav-item">
                <Link to ="/about" target="_blank"> About </Link>
                </li>
            </ul>
        </div>
    )
}