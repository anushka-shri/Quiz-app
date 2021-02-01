import React , {useEffect, useState} from 'react'
import './App.css';
import Start from './components/Start'
import Question from './components/Question'
import End from './components/End.js'
import Modal from './components/Modal'
import quizdata from './data/quizData.json';

let interval;

function App() {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [time, setTime] = useState(0);

  const [showModal, setShowModal] = useState(false);


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
      {step === 1 && <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && <Question
        data={quizdata.data[activeQuestion]}
        onAnswerUpdate={setAnswer}
        numberOfQuestions={quizdata.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}

      />}
      {step === 3 && <End
        
        results={answers}
        data={quizdata.data}
        onReset={resetHandler}
        onAnswerCheck={() => setShowModal(true) }
        time={time}
      />}

      {showModal && <Modal
      
        data={quizdata.data}
        results={answers}
        onClose={setShowModal(false)}
      />}
    </div>
  );
}

export default App;
