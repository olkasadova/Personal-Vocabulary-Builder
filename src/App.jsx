import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import TopMenu from "./TopMenu";
import MainVocabularyReminder from "./MainVocabularyReminder";
import MainLearningEffectively from "./MainLearningEffectively";
import WordCardBlock from "./WordCardBlock";


function App() {
  const [card, setCard] = React.useState([
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
useEffect(() => {
  const localCard = localStorage.getItem("card");
  if (localCard) {
    setCard(JSON.parse(localCard));
  }
 }, [setCard]);
 useEffect(() => {
  const localCard = localStorage.getItem("card");
  if (!localCard) {
    localStorage.setItem("card", JSON.stringify(card));
  }
}, [card]);


  return (
    <div className="App">
      <div className="container"> 
        <Header />
        <TopMenu />
        <MainLearningEffectively />
        <MainVocabularyReminder  card={card}/>
        <WordCardBlock card={card}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
