import React from "react";
import './WordCardBlock.css';

export default function WordCardBlock ({data}){
    const[words, setWords] = React.useState(data);
    return(
    <div className="word-card-container">   
        <div className="cards-container"> 
            {
                words.map((card, index) => (
                    
                        <div key={index} className="word-card">
                            <h1 className="word-title"> {card.word} </h1>  
                            <p className="word-description"> {card.description} </p>
                            <img src="" alt="WordCardImage" className="word-img"/>
                            <button className="word-button-synonyms"> View synonyms </button>
                            <p className="word-synonyms"> {card.synonyms} </p>
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