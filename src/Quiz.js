import React, { useState } from 'react';
import './styles/quiz.css';
import questionsFile from './Questions.js'

export default function Quiz() {
	// importtaa quiz kysymykset ulkoisesta tiedostosta
	const questions = questionsFile;
	// ylläpidä näytettävän kysymyksen indeksiä
	const [currentQuestion, setCurrentQuestion] = useState(0);
	// viimeisen vaiheen pisteiden näyttö
	const [showScore, setShowScore] = useState(false);
	// laske pisteet vastauksista
	const [score, setScore] = useState(0);


	// vastausta klikatessa lisää tarvittaessa score ja näytä seuraava kyssäri lisäämällä indeksiin
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	// handlaa kysymyksen tai vastaus-selityksen näyttäminen
	let questionOrAnswer = currentQuestion % 2 === 1

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Sait {score} pistettä, kun maksimi oli 5
				</div>
			) : (
				<><div className='question-section'>
						{questionOrAnswer ? <div className='question-count'> Kysymys {currentQuestion/ 2 + 0.5}/5 </div> : ""}
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}