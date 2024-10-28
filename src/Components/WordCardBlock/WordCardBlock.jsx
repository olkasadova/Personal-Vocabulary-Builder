import React from "react";
import './WordCardBlock.css';
import {useState, useEffect} from "react";

//this function return API value (name) from github
//1.hange it to return synonyms from dictionary api
//2.pass a word to use it in api url

const  getDescAPI = async (word) => {
    const APIKey = "37ptw5itvqnqg6c972l2m6mu97fvpae3nhnyisfr4nxjbxex4";
    //redo with word definition
    const response = await fetch(`https://api.wordnik.com/v4/word.json/${word}/examples?api_key=${APIKey}`);
    const body = await response.json();
    console.log(body);

    return body.examples[0].text;
    //add error states when API is not available
}
const  getSynonymsAPI = async () => {
    const response = await fetch("https://api.github.com/users/olkasadova");
    const body = await response.json();
    return body.name;
}
const  getExamplesAPI = async (word) => {
    const APIKey = "37ptw5itvqnqg6c972l2m6mu97fvpae3nhnyisfr4nxjbxex4";
    const response = await fetch(`https://api.wordnik.com/v4/word.json/${word}/examples?api_key=${APIKey}`);
    const body = await response.json();
    console.log(body);
    return body.examples[0].text;
    //add error states when API is not available
}

export default function WordCardBlock ({data}){
    const[words, setWords] = React.useState(data);
    const[urlSyn, setUrlSyn] = React.useState(""); //could be dictionary api
    const[urlDesc, setUrlDesc] = React.useState(""); //could be dictionary api
    const[urlExamples, setUrlExamples] = React.useState(""); //could be dictionary api
    const[DescButton, setDescButton] = React.useState("View Description");

    const OnSynonymsClick = async (word) => {
        const urlSyn = await getSynonymsAPI(word);
        setUrlSyn(urlSyn);
    };
    const onDescClick = async (word) => {
        const description = await getDescAPI(word);
        setUrlDesc(prevState => ({ ...prevState, [word]: description }));
        if(DescButton === "Hide Description") 
        {
                setDescButton("View Description");
                setUrlDesc("");
        }
        else
            setDescButton("Hide Description");  
    };
    const onExamplesClick = async (word) => {
        const examples = await getExamplesAPI(word);
        setUrlExamples(prevState => ({ ...prevState, [word]: examples }));  
    };

    //change 'View Description button text to 'Hide Description' when clicked
    //and hide the desctiption (set state to null)

    return(
    <div className="word-card-container">   
        <div className="cards-container"> 
            {
                words.map((card, index) => (
                    
                        <div key={index} className="word-card">
                            <h1 className="word-title"> {card.word} </h1>  
                            <button className="word-button-desc" onClick={() => onDescClick(card.word)}> {DescButton} </button>
                            <p className="word-description"> {urlDesc[card.word]} </p>
                            <img src="" alt="WordCardImage" className="word-img"/>
                            <button className="word-button-synonyms" onClick={OnSynonymsClick}> View synonyms </button>
                            <p></p>
                            <button className="word-button-examples" onClick={onExamplesClick}> View examples </button>
                            <p className="word-synonyms"> {urlSyn} </p> 
                            <p className="word-examples"> {urlExamples} </p> 
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