import React from 'react';

const Start = ({ quizStart}) => {
    
    return (
        <div className='card'>
            <div className='card-content'>
                <div className='content'>
                    <h1>Start the quiz</h1>
                    <p>Good Luck!</p>
                    <button className='button is-info is-medium'
                    onClick={quizStart}>
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Start;