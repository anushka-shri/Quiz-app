import React, { useState, useEffect, useRef } from 'react';


const Question = ({ data, onAnwerUpdate, numberOfQuestions,
activeQuestion, onSetActiveQuestion, onSetStep}) => {

    const nextClick = (e) => {
        
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 >
                        Question here
                    </h2>
                    <label className="radio has-backgroung-light">
                        <input type="radio" name="answer" value='' 
                            onChange={() => { }} />
                        
                      Choose an option
                    </label>
                     <label className="radio has-backgroung-light">
                        <input type="radio" name="answer" value='' 
                            onChange={() => { }} />
                        
                      Choose an option
                    </label>
                     <label className="radio has-backgroung-light">
                        <input type="radio" name="answer" value='' 
                            onChange={() => { }} />
                        
                      Choose an option
                    </label>
                </div>

                <button className="button is-link is-medium is-full-width mt4"
                    onClick={nextClick}>
                    Next

                </button>
            </div>
        </div>
    )
    

};

export default Question;