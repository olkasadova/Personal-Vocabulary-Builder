import React from "react";
import './NewWordForm.css';

export default function NewWordForm (){

    //1. add state here on button Clcik that will render a form showing that a new word was added to the vocabulary
    //2. also add scipt that will actually add a word to the list of words (file?)
    //button onClick={()=>setEmotion ("sad")}>Sad</button>

    return(
     
    <div className="new-word-form"> 
        <form className="add-word-form">
            <input type="text" className="new-word-input" placeholder="Enter the word"/>
            <textarea className="description-input" placeholder="Enter the description"/>
           
            <button className="add-to-vocabulary-button" > Add to Vocabulary </button>
            
        </form>
        
    <div className="read-more">
     read more 
    </div>
        
    </div>
    )
}