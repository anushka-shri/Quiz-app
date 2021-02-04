import React from 'react';




const Start = ({ onQuizStart, ontoggleTheme, onChangeThemeName, togglingTheme}) => {
    
    return (
        <div className="start-wrapper">

            <div>
                <button className='button is-info2 is-medium toggle-btn' onClick={togglingTheme}>
                    Change Theme {onChangeThemeName}
                </button> 
            </div>

            <div className='card'>
                <div className='card-content'>
                    <div className='content'>
                        <h1 className="start-h1" >Start the quiz</h1>
                        <h2>Good Luck!</h2>
                        <br />
                        <br />
                        <button className='button is-info3 is-medium' onClick={onQuizStart}>
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;