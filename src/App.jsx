import React, { useEffect } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import TopMenu from './Components/TopMenu/TopMenu';
import MainVocabularyReminder from "./Components/MainVocabularyReminder/MainVocabularyReminder";
import MainLearningEffectively from "./Components/MainLearningEffectively/MainLearningEffectively";
import WordCardBlock from "./Components/WordCardBlock/WordCardBlock";

import data from './words.json';


function App() 
{
  return (
    <div className="App">
      <div className="container"> 
        <Header user="Olha"/>
        <TopMenu />
        <MainLearningEffectively />
        <MainVocabularyReminder  data={data}/>
        <WordCardBlock data={data}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
