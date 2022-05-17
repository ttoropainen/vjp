import React, { useState } from 'react';
import './styles/quiz.css';

export default function Quiz() {
	const questions = [
		{
			questionText: 'Kuinka paljon vettä kuluu yhden t-paidan valmistamiseen?',
			answerOptions: [
				{ answerText: '350 litraa', isCorrect: false },
				{ answerText: '1100 litraa', isCorrect: false },
				{ answerText: '2700 litraa', isCorrect: true },
			],
		},
		{
			questionText: 'Mitä vaatteen lapussa lukeva "Conscious Collection" tai "Sustainable Choice" tarkoittaa?',
			answerOptions: [
				{ answerText: 'Tuote on jollakin tavalla hieman vähemmän haitallinen kuin saman ketjun muut tuotteet', isCorrect: true },
				{ answerText: 'Vaatteen valmistamiseen on käytetty kierrätettyjä materiaaleja', isCorrect: false },
				{ answerText: 'Työntekijöille on maksettu tuotteen valmistamisesta kohtuullista palkkaa.', isCorrect: false },
			],
		},
		{
			questionText: 'Mikä on maailman saastuttavin teollisuudenala?',
			answerOptions: [
				{ answerText: 'Öljyteollisuus', isCorrect: true },
				{ answerText: 'Tekstiili- ja muotiteollisuus', isCorrect: false },
				{ answerText: 'Elintarviketeollisuus', isCorrect: false },
			],
		},
		{
			questionText: 'Kuinka paljon vaatteita heitetään Suomessa vuosittain pois?',
			answerOptions: [
				{ answerText: 'alle 10 miljoonaa kiloa', isCorrect: false },
				{ answerText: '30-50 miljoonaa kiloa', isCorrect: false },
				{ answerText: '70-100 miljoonaa kiloa', isCorrect: true },
			],
		},
        {
			questionText: 'Kuinka paljon voit vähentää päästöjä käyttämällä vaatteitasi tuplasti pidempään?',
			answerOptions: [
				{ answerText: '14%', isCorrect: false },
				{ answerText: '44%', isCorrect: true },
				{ answerText: '94%', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Sait {score} pistettä, kun maksimi oli {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Kysymys {currentQuestion + 1}</span>/{questions.length}
						</div>
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