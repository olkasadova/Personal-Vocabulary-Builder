import React from "react";
import './WordCardBlock.css';

export default function WordCardBlock ({card}){
    
    return(
    <div className="word-card-container">   
        <div className="cards-container"> 
            {
                card.map((card, index) => (
                    
                        <div key={index} className="word-card">
                            <h1 className="word-title"> {card.word} </h1>  
                            <p className="word-description"> {card.description} </p>
                            <img src="" alt="WordCardImage" className="word-img"/>
                            <button className="word-button-synonyms"> View synonyms </button>
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