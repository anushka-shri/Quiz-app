import React, { useState, useEffect, useRef } from 'react';


const Question = ({ data, onAnswerUpdate, numberOfQuestions,
  activeQuestion, onSetActiveQuestion, onSetStep,onChangeThemeName, togglingTheme }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();
    
  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector('input:checked')
  
    if (findCheckedInput)
    {
      findCheckedInput.checked = false;
     }
  }, [data])
   

    const changeHandler = (e) => {
      setSelected(e.target.value);
      
      if (error) {
        setError('')
      }
    }

    const nextClickHandler = (e) => {
        if (selected === '')
        {
            return setError('please enter value')
      }
      
      onAnswerUpdate(prevState =>
        [...prevState, { q: data.question, a: selected }])
      
      setSelected('');


      //if its not the last question
      if (activeQuestion < numberOfQuestions - 1)
      {
        onSetActiveQuestion(activeQuestion + 1)
      }
      //if its the last question
      else {
        onSetStep(3);
      }
    }

  return (
    
    <div>
       <div>
                <button className='button is-info2 is-medium toggle-btn' onClick={togglingTheme}>
                    Change Theme {onChangeThemeName}
                </button> 
            </div>

    <div className="card">
      <div className="card-content">
                <div className="content">
                       
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radiosWrapper}>
            {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
           {error && <div className="has-text-white">{error}</div>}
          <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
          </div>
          
          
      </div>
      </div>
      </div>
  );
}
    



export default Question;