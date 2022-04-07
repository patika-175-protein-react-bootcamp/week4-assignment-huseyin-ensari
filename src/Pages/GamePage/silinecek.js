import React, { useEffect, useState } from 'react';
import '../../Styles/Pages/GamePage.css';
import { Text, AnswerButton, QuestionBoard } from '../../Components';
import { useGame } from '../../Contexts/GameContext';

const GamePage = () => {
    const { tour, increaseTour, score, increaseScore, addQuestion, questions } = useGame();
    const [bgColor, setBgColor] = useState("");
    const [trueAnswerCount, setTrueAnswerCount] = useState(0);


    const createRandomNumber = () => Math.floor(Math.random() * 9 + 1);
    // const firstNumber = createRandomNumber();
    // const secondNumber = createRandomNumber();
    // setFirstNumber(createRandomNumber());
    // setSecondNumber(createRandomNumber());
    // secondNumber === firstNumber && createRandomNumber();
    // const firstWrongNumber = (secondNumber - 1) * firstNumber;
    // const secondWrongNumber = (firstNumber + 1) * secondNumber;
    // const trueNumber = firstNumber * secondNumber;

    // const createQuestion = () => {
    let firstNumber = createRandomNumber();
    let secondNumber = createRandomNumber();
    secondNumber === firstNumber && createRandomNumber();
    let firstWrongNumber = (secondNumber - 1) * firstNumber;
    let secondWrongNumber = (firstNumber + 1) * secondNumber;
    let trueNumber = firstNumber * secondNumber;
    // };

    useEffect(() => { }, [questions]);

    const handleAnswer = (chosenAnswer) => {
        const newQuestion = `${firstNumber} x ${secondNumber} = ${trueNumber}`;
        if (chosenAnswer === trueNumber) {
            setBgColor("#00BF63");
            setTimeout(() => { setBgColor(""); }, 3000);
            setTrueAnswerCount(prevState => prevState++);
            console.log('->', trueAnswerCount);
            return addQuestion(newQuestion, true);
        }
        addQuestion(newQuestion, false);
        setBgColor("#FA0000");
        setTimeout(() => { setBgColor(""); }, 3000);
        // yanlış cevap sayısı yap. Onu da artır.
    };

    return (
        <div id='game__page' style={{ backgroundColor: bgColor }}>
            <div id='blackboard' className="column">
                <QuestionBoard>{`${firstNumber} x ${secondNumber}`}</QuestionBoard>
            </div>
            <div id='game__answer__score__container' className="column">
                <div id='game__score_table'>
                    <Text size="normal">Score : {score}</Text>
                    <span className='mx-3'>
                        <Text size="normal">Tour : {tour}</Text>
                    </span>
                    <Text size="normal">Questions {`${trueAnswerCount}/${questions.length}`}</Text>
                </div>
                <div id='game__answers'>
                    <span className='game__answer__one' onClick={() => handleAnswer(firstWrongNumber)}><AnswerButton>{firstWrongNumber}</AnswerButton></span>
                    <span className='game__answer__two' onClick={() => handleAnswer(trueNumber)}><AnswerButton>{trueNumber}</AnswerButton></span>
                    <span className='game__answer__three' onClick={() => handleAnswer(secondWrongNumber)}><AnswerButton>{secondWrongNumber}</AnswerButton></span>
                </div>
            </div>
        </div>
    );
};

export default GamePage;