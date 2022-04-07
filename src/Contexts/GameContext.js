import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {

    const [tour, setTour] = useState(1);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [trueAnswerCount, setTrueAnswerCount] = useState(0);

    const increaseTour = () => setTour(tour + 1);
    const increaseScore = (point) => setScore(score + point);
    const addQuestion = (newQquestion, answerIsTrue) => {
        setQuestions([...questions, { question: newQquestion, isTrue: answerIsTrue }]);
    };
    const resetQuestionList = () => setQuestions([]);
    const increaseTrueAnswerCount = () => setTrueAnswerCount(trueAnswerCount + 1);
    const resetScore = () => setScore(0);
    const resetTrueAnswerCount = () => setTrueAnswerCount(0);

    const value = {
        questions,
        tour,
        score,
        trueAnswerCount,
        increaseTour,
        increaseScore,
        addQuestion,
        resetQuestionList,
        increaseTrueAnswerCount,
        resetScore,
        resetTrueAnswerCount
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
export const useGame = () => useContext(GameContext);