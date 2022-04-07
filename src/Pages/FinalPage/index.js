import React, { useEffect, useState } from 'react';
import "../../Styles/Pages/FinalPage.css";
import { MainButton, Text } from '../../Components';
import { CorrectIcon, TitleDivider, WrongIcon } from '../../Constants/Icons';
import { useGame } from '../../Contexts/GameContext';
import { useLocation, useNavigate } from 'react-router-dom';

const FinalPage = () => {

    const { questions, score: currentScore, increaseTour, resetQuestionList, resetScore, resetTrueAnswerCount } = useGame();
    const { state: incomingValue } = useLocation();
    const { trueAnswerCount } = incomingValue;
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    const calculateScore = () => {
        let localScore = Number(localStorage.getItem("score"));
        let localTrueAnswerCount = Number(localStorage.getItem("trueAnswerCount"));
        let localQuestionCount = Number(localStorage.getItem("questionCount"));
        localTrueAnswerCount += trueAnswerCount;
        localQuestionCount += 10;
        localScore += currentScore;
        setScore(localScore);
        localStorage.setItem("trueAnswerCount", localTrueAnswerCount);
        localStorage.setItem("questionCount", localQuestionCount);
        localStorage.setItem("score", localScore);
    };

    useEffect(() => calculateScore(), []);

    const handleRestartGame = () => {
        increaseTour();
        resetScore();
        resetQuestionList();
        resetTrueAnswerCount();
        navigate("/game");
    };

    return (
        <div id="final__container">
            <div id="final__page">
                <div id="final__column" className='column'>
                    <div className='title'>
                        <Text size="title">Final</Text>
                        <TitleDivider size={300} />
                    </div>
                    <Text size="large">Point : {score}</Text>
                    <Text size="large">Question : {10}</Text>
                    <Text size="large">Correct Answer : {trueAnswerCount}</Text>
                    <span onClick={handleRestartGame}>
                        <MainButton>Restart</MainButton>
                    </span>
                </div>
                <div id="questionlist__column" className='column'>
                    <div className='title'>
                        <Text size="title">All Question</Text>
                        <TitleDivider size={400} />
                    </div>
                    {
                        questions.map((question, index) => (
                            <div id='question__map' key={index}>
                                <Text size="small">{question.question}</Text>
                                {question.isTrue ? <CorrectIcon /> : <WrongIcon />}
                            </div>
                        ))
                    }
                </div>
            </div >
        </div>
    );
};

export default FinalPage;