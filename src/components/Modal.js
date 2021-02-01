import React from 'react';

const Modal = ({data, results, onClose }) =>

{
    <div class="modal">
        <div class="modal-background" ></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    Your Answers
                </p>
                <button class="delete" aria-label="close" onClick={onClose}>
                    
            </button>
            </header>
            <section class="modal-card-body">
            <ul>
            {results.map((result, id) => {
                        
                  <li key={id}>
                    <p>{result.q}</p>
                      <p className={result.a === data[id].answer ?
                              'has-background-success'
                              : 'has-background-danger'}>
                          Your answer is: {result.a}
                      </p>
                   </li>
                    })}
            </ul>
             </section>
        </div>
     </div>
 
    
}


export default Modal;