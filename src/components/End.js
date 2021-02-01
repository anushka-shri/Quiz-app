import React, { useState, useEffect } from 'react'
import {formatTime} from '../utils/index'

const End = ({results, data, onReset, onAnswerCheck, time }) => {
    
    
const [correctAnswers, setCorrectAnswers] = useState('');
        

        useEffect(() => {
            
            let correct = 0;

            results.forEach((result, index) => {

                if (result.a === data[index].answer) {
                    correct++;
                }
            });

            setCorrectAnswers(correct);
        },[])

    return (
        <div class="card">
  <div class="card-content">
    <div class="content">
                    <h1>Your result is</h1>
                    <p>You scored {correctAnswers} out 0f {data.length}</p>
                    <p> {Math.floor((correctAnswers / data.length) * 100)} %</p>
                    <p> your time is {formatTime(time)}</p>
                    <button className="button is-primary" onClick={onReset}> Try Again</button>
                    <button className="button is-link" onClick={onAnswerCheck}> Check Answer</button>
    </div>
  </div>
</div>
    )
}

export default End;