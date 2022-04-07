import React, { useEffect, useState } from 'react';
import '../../Styles/Pages/GamePage.css';
import { Text, AnswerButton, QuestionBoard } from '../../Components';
import { useGame } from '../../Contexts/GameContext';
import { useNavigate } from 'react-router-dom';

const GamePage = () => {
    const { tour, score, increaseScore, addQuestion, questions, trueAnswerCount, increaseTrueAnswerCount } = useGame();
    const [bgColor, setBgColor] = useState("");
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [questionCount, setQuestionCount] = useState(1);
    const [isClickable, setIsClickable] = useState(true);
    const navigate = useNavigate();

    let firstWrongNumber = (secondNumber - 1) * firstNumber;
    let secondWrongNumber = (firstNumber + 1) * secondNumber;
    let trueNumber = firstNumber * secondNumber;

    // Generates and returns numbers 1-10
    const createRandomNumber = () => Math.floor(Math.random() * 9 + 1);

    // generates questions
    const createQuestion = () => {
        setFirstNumber(createRandomNumber());
        setSecondNumber(createRandomNumber());
        // If two options are equal, I change this
        // 'Cause the options are exploding
        secondNumber === firstNumber && setSecondNumber(createRandomNumber());
    };

    // I'm throwing the options for the question into an array
    // because : Does not meet the requested rules in options
    let answerArray = [firstWrongNumber, secondWrongNumber, trueNumber];


    // changes the order of the options
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    answerArray = shuffle(answerArray);

    useEffect(() => {
        questionCount === 11 ? navigate("/final", { state: { trueAnswerCount } }) : createQuestion();
    }, [questions]);


    const handleAnswer = (chosenAnswer) => {
        setIsClickable(false);
        const newQuestion = `${firstNumber} x ${secondNumber} = ${trueNumber}`;
        if (chosenAnswer === trueNumber) {
            const addedScore = Math.ceil(Math.sqrt(trueNumber));
            setBgColor("#00BF63");
            increaseTrueAnswerCount();
            increaseScore(addedScore);
            setTimeout(() => {
                setBgColor("");
                setQuestionCount(questionCount + 1);
                addQuestion(newQuestion, true);
                setIsClickable(true);
            }, 3000);
            return;
        }
        setBgColor("#FA0000");
        setTimeout(() => {
            setBgColor("");
            setQuestionCount(questionCount + 1);
            addQuestion(newQuestion, false);
            setIsClickable(true);
        }, 3000);
    };


    return (
        <div id='game__container' style={{ backgroundColor: bgColor }}>
            <div id='game__page' >
                <div id='blackboard' className="column">
                    <QuestionBoard>{`${firstNumber} x ${secondNumber}`}</QuestionBoard>
                </div>
                <div id='game__answer__score__container' className="column">
                    <div id='game__score_table'>
                        <Text size="normal">Score : {score}</Text>
                        <span className='mx-3'>
                            <Text size="normal">Tour : {tour}</Text>
                        </span>
                        <Text size="normal">Questions {`${trueAnswerCount}/${questionCount}`}</Text>
                    </div>
                    <div id='game__answers'>
                        <span className={'game__answer__one' + (!isClickable && (answerArray[0] === trueNumber) ? " true__answer" : "")} onClick={isClickable ? (() => handleAnswer(answerArray[0])) : undefined}><AnswerButton>{answerArray[0]}</AnswerButton></span>
                        <span className={'game__answer__two' + (!isClickable && (answerArray[1] === trueNumber) ? " true__answer" : "")} onClick={isClickable ? (() => handleAnswer(answerArray[1])) : undefined}><AnswerButton>{answerArray[1]}</AnswerButton></span>
                        <span className={'game__answer__three' + (!isClickable && (answerArray[2] === trueNumber) ? " true__answer" : "")} onClick={isClickable ? (() => handleAnswer(answerArray[2])) : undefined}><AnswerButton>{answerArray[2]}</AnswerButton></span>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default GamePage;