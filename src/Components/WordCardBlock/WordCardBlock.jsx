import React from "react";
import './WordCardBlock.css';
import {useState, useEffect} from "react";

//this function return API value (name) from github
//1.hange it to return synonyms from dictionary api
//2.pass a word to use it in api url

const  getSynonymsAPI = async () => {
    const response = await fetch("https://api.github.com/users/olkasadova");
    const body = await response.json();
    return body.name;
}
const  getDescAPI = async () => {
    const response = await fetch("https://api.github.com/users/olkasadova");
    const body = await response.json();
    return body.location;
}

export default function WordCardBlock ({data, }){
    const[words, setWords] = React.useState(data);
    const[urlSyn, setUrlSyn] = React.useState("null"); //could be dictionary api
    const[urlDesc, setUrlDesc] = React.useState("null"); //could be dictionary api

    const OnSynonymsClick = async () => {
        const urlSyn = await getSynonymsAPI();
        setUrlSyn(urlSyn);
    };
    const OnDescClick = async () => {
        const urlDesc = await getDescAPI();
        setUrlDesc(urlDesc);
    };
    
    return(
    <div className="word-card-container">   
        <div className="cards-container"> 
            {
                words.map((card, index) => (
                    
                        <div key={index} className="word-card">
                            <h1 className="word-title"> {card.word} </h1>  
                            <button className="word-button-desc" onClick={OnDescClick}> View description </button>
                            <p className="word-description"> {urlDesc} </p>
                            <img src="" alt="WordCardImage" className="word-img"/>
                            <button className="word-button-synonyms" onClick={OnSynonymsClick}> View synonyms </button>
                            <p className="word-synonyms"> {urlSyn} </p>  
                            <a href = "https://translate.google.com" target="_blank" 
                            className="link-translation" > View Translation </a>
                        </div>   
                    )
                )
            }        
        </div>
    </div>
   
    )
}