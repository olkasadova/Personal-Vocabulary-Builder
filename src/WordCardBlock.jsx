import React from "react";
import './WordCardBlock.css';

export default function WordCardBlock (){
    const [card] = React.useState([
        {
            word: "Word1",
            description: "Word is from the book 'Thousands Splendid Suns'"
        },
        {
            word: "Word2",
            description: "Harry Potter"
        },
        {
            word: "Word3",
            description: "Never Let Me Go"
        },
        {
            word: "Word4",
            description: "Never Let Me Go"
        },
        {
            word: "Word5",
            description: "Never Let Me Go"
        },
        {
            word: "Word6",
            description: "Never Let Me Go"
        },

    ])
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
                            <a href = "https://translate.google.com" target="_blank" className="link-translation" > View Translation </a>
                        </div>   
                    )
                )
            }        
        </div>
    </div>
   
    )
}