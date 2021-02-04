import React, { useState, useEffect } from 'react'
import {formatTime} from '../utils/index'

const End = ({
	results,
	data,
	onReset,
	onAnswerUpdate,
	time,
	onChangeThemeName,
	togglingTheme,
}) => {
	const [correctAnswers, setCorrectAnswers] = useState('');

	useEffect(() => {
		let correct = 0;

		results.forEach((result, index) => {
			if (result.a === data[index].answer) {
				correct++;
			}
		});

		setCorrectAnswers(correct);
		// eslint-disable-next-line 
	}, []);

	return (
		<div>
			<div>
				<button
					className='button is-info2 is-medium toggle-btn'
					onClick={togglingTheme}>
					Change Theme {onChangeThemeName}
				</button>
			</div>
			<div class='card'>
				<div class='card-content'>
					<div class='content'>
						<h1>Your result is</h1>
						<p>
							You scored {correctAnswers} out 0f {data.length}
						</p>
						<p> {Math.floor((correctAnswers / data.length) * 100)} %</p>
						<p> your time is {formatTime(time)}</p>
						<button className='button is-primary' onClick={onReset}>
							{' '}
							Try Again
						</button>
						<button className='button is-link' onClick={onAnswerUpdate}>
							{' '}
							Check Answer
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default End;