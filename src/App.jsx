import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Top_menu from "./Top_menu";
import MainVocabularyReminder from "./MainVocabularyReminder";
import MainLearningEffectively from "./MainLearningEffectively";


function App() {
  return (
    <div className="App">
      <div className="container"> 
        <Header />
        <Top_menu />
        <MainLearningEffectively />
        <MainVocabularyReminder />
        <Footer />
      </div>
    </div>
  );
}

export default App;
