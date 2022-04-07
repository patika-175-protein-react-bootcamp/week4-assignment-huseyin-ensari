import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainButton, Text } from '../../Components';
import { TitleDivider } from '../../Constants/Icons';
import '../../Styles/Pages/HomePage.css';

const HomePage = () => {


    let localScore = Number(localStorage.getItem("score")) || 0;
    let localTrueAnswerCount = Number(localStorage.getItem("trueAnswerCount")) || 0;
    let localQuestionCount = Number(localStorage.getItem("questionCount")) || 0;
    useEffect(() => {
        localStorage.setItem("score", localScore);
        localStorage.setItem("trueAnswerCount", localTrueAnswerCount);
        localStorage.setItem("questionCount", localQuestionCount);
    }, []);

    return (
        <div id='home__page' >
            <div className='title'>
                <Text size="title">Mathematics Game</Text>
                <TitleDivider />
            </div>
            <Text size="large">Total Score : {localScore}</Text>
            <Text size="large">Total Questions : {localQuestionCount}</Text>
            <Text size="large">Correct Answers : {localTrueAnswerCount}</Text>
            <Link to={"/game"}>
                <MainButton>Start</MainButton>
            </Link>
        </div >
    );
};

export default HomePage;