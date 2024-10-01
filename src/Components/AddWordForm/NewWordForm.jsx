import React from "react";
import './NewWordForm.css';

export default function NewWordForm (){

    //1. add state here on button Clcik that will render a form showing that a new word was added to the vocabulary
    //2. also add scipt that will actually add a word to the list of words (file?)
    //button onClick={()=>setEmotion ("sad")}>Sad</button>
    const [word, setWord] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [synonyms, setSynonyms] = React.useState("");
    const [book, setBook] = React.useState("Thousand Splendid Suns");

    const handleAddWord = (e)=>{
        e.preventDefault();
        const newWord = {word, description, synonyms, book};
        console.log(newWord); 
        
        }
   
    
    return(
     
    <div className="new-word-form"> 
        <form 
        className="add-word-form"
        onSubmit={handleAddWord}>
            <label>Enter a new word:</label>
            <input 
                type="text" 
                className="new-word-input" 
                placeholder="Enter the word"
                value={word}
                onChange={(e) => setWord(e.target.value)}/>
            <label>Word description:</label>
            <input 
                type="text" 
                className="new-word-descripion" 
                placeholder="Enter the description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>
            <input 
                type="text" 
                className="new-word-synonyms" 
                placeholder="Enter synonyms"
                value={synonyms}
                onChange={(e)=> setSynonyms(e.target.value)}/>
            <select 
                className="new-word-book"
                value={book}
                onChange={(e)=> setBook(e.target.value)}> 
                    <option value="Thousand Splendid Suns">Thousand Splendid Suns</option>
                    <option value="Never Let Me Go">Never Let Me Go</option>    
            </select>
           
            <button className="add-to-vocabulary-button" > Add to Vocabulary </button>
            
        </form>
        
    <div className="read-more">
        <p>read more</p>
        <p>{word}</p>
        <p>{book}</p>
    </div>
        
    </div>
    )
}