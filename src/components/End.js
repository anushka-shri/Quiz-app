import React, { useState, useEffect } from 'react'


const End =
    ({ data, results, time, onCheckanswers, onTryAgain }) => {
    
    
return (
<div class="card">
  <div class="card-content">
    <div class="content">
                <h2>Your Results</h2>
                <p> 8 out of 10</p>
                <p> 80%</p>
                <p> your time: 15s</p>
                <button className='button is-info'>
                    Check Answers
                </button>
                <button className='button is-success'>
                    Try Again
                </button>
    </div>
  </div>
</div>
    )
}

export default End;