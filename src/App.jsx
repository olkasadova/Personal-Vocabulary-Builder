import React, {useState, useEffect } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TopMenu from './Components/TopMenu/TopMenu';
import MainVocabularyReminder from "./Components/MainVocabularyReminder/MainVocabularyReminder";
import MainLearningEffectively from "./Components/MainLearningEffectively/MainLearningEffectively";
import WordCardBlock from "./Components/WordCardBlock/WordCardBlock";



function App() 
{
  const[words, setWords] = React.useState([]);
  function handleState(newWords){
    setWords(newWords);
  }

  return (
    <div className="App">
      <div className="container"> 
        <Header user="Olha"/>
        <TopMenu />
        <MainLearningEffectively />
        <MainVocabularyReminder  change={handleState} />
        <WordCardBlock displayData={words}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
