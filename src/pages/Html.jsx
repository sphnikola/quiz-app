import { quiz } from "../data/quiz";
import { useState } from "react";
import uuid from "react-uuid";
import { QuestionPage } from "../QuestionPage";
import { OptionPage } from "../OptionPage";

export function Html() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [choiceMade, setChoiceMade] = useState();
  const [changeText, setChangeText] = useState(false);
  const [changescene, setnextscene] = useState(false);
  const result = quiz.flatMap(({ quizzes }) => quizzes);

  //gets the value of the selected answer
  const checkAnswer = (e) => {
    // console.log(e.target.innerText);
    const choice = e.target.innerText;
    setChoiceMade(choice);
  };

  const handleClick = () => {
    setChangeText((current) => !current);
    changeText && setCurrentQuestion(currentQuestion + 1);
    if (!changeText) {
      if (choiceMade === result[0].questions[currentQuestion - 1].answer) {
        setScore(score + 1);
      } else {
        console.log("wrong");
      }
    }
    if (currentQuestion === 10) {
      setnextscene(true);
    }
  };
  console.log(score);

  const listItems = result[0].questions[currentQuestion - 1].options.map(
    (item) => (
      <li key={uuid()} value={item} className="mb-5">
        <button
          onClick={checkAnswer}
          className="flex gap-x-3  w-full items-center text-[18px] bg-link-bg
        font-normal p-5  rounded-xl md:text-[28px]  md:leading-[34px]"
        >
          {item}
        </button>
      </li>
    )
  );
  return (
    <>
      {changescene ? (
        <h2>you scored {score}</h2>
      ) : (
        <>
          <QuestionPage
            question={result[0].questions[currentQuestion - 1].question}
            currentQuestion={currentQuestion}
            totalQuestion={result[0].questions.length}
          />
          <OptionPage
            listItems={listItems}
            handleClick={handleClick}
            text={changeText ? "next question" : "submit text"}
          />
        </>
      )}
    </>
  );
}
