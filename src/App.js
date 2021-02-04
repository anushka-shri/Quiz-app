import React , {useEffect, useState} from 'react'
import './App.css';
import Start from './components/Start'
import Question from './components/Question'
import End from './components/End.js'
import Modal from './components/Modal'
import quizdata from './data/quizData.json';

let interval;

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [time, setTime] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(getStorageTheme());

  const [themeName, setThemeName] = useState();

 
 function togglingTheme(){
    toggleTheme();
    onChangeThemeName();
  }

  const onChangeThemeName = () => {
    if (themeName === 'Dark') {
      setThemeName('Light')
    } else {
      setThemeName('Dark')
    }
  }

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);



  const resetHandler = () => {
    setActiveQuestion(0);
    setAnswer([]);
    setStep(2);
    setTime(0);

     interval = setInterval(() => {

      setTime(prevTime => prevTime + 1)

    }, 1000);
  }

 const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {

      setTime(prevTime => prevTime + 1)

    }, 1000);
  }

   useEffect(() => {

    if (step === 3) {
      
       clearInterval(interval);
    }
   }, [step])


  return (
    <div className="App">
      {step === 1 && <Start 
      onQuizStart={quizStartHandler}
      toggleTheme ={toggleTheme}
      onChangeThemeName={themeName}
      togglingTheme={togglingTheme}
    />}
      {step === 2 && <Question
        data={quizdata.data[activeQuestion]}
        onAnswerUpdate={setAnswer}
        numberOfQuestions={quizdata.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
        toggleTheme ={toggleTheme}
      onChangeThemeName={themeName}
      togglingTheme={togglingTheme}
       />}
       

      
      {step === 3 && <End 
        results={answers}
        data={quizdata.data}
        onReset={resetHandler}
        onAnswerUpdate={() => setShowModal(true)}
        time={time}
        toggleTheme ={toggleTheme}
      onChangeThemeName={themeName}
      togglingTheme={togglingTheme}
        />}
      

      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizdata.data}
        toggleTheme ={toggleTheme}
      onChangeThemeName={themeName}
      togglingTheme={togglingTheme}
     />}
    </div>
  );
}

export default App;
