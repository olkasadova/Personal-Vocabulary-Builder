import React from "react";
import './MainVocabularyReminder.css';

import data from './../../words.json';

export default function MainVocabularyReminder ({change}){
    return(
    <div className="vocabulary-reminder-block"> 
        <form className="review-words">
            <button onClick = {(e)=> {e.preventDefault(); change(data)}} className="find-button">Review Words</button>
        </form>
        <div className="button-text"> It's time to review your vocabulary </div>
   
       
    </div>
    )
}