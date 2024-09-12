import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import TopMenu from "./TopMenu";
import MainVocabularyReminder from "./MainVocabularyReminder";
import MainLearningEffectively from "./MainLearningEffectively";
import WordCardBlock from "./WordCardBlock";


function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Header />
        <TopMenu />
        <MainLearningEffectively />
        <MainVocabularyReminder />
        <WordCardBlock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
