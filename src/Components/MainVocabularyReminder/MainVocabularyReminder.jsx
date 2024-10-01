import React from "react";
import './MainVocabularyReminder.css';

export default function MainVocabularyReminder ({cards}){
    return(
    <div className="vocabulary-reminder-block"> 
        <form className="review-words">
            <button className="find-button">Review Words</button>
        </form>
        <div className="button-text"> It's time to review your vocabulary </div>
   
       
    </div>
    )
}