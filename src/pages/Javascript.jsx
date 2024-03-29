import { quiz } from "../data/quiz";
import { data } from "../data/data";
import { useState } from "react";
import uuid from "react-uuid";
import { QuestionPage } from "../QuestionPage";
import { OptionPage } from "../OptionPage";
import { ScorePage } from "./ScorePage";
import correct from "../assets/images/icon-correct.svg";

export function JavaScript() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [choiceMade, setChoiceMade] = useState();
  const [changeText, setChangeText] = useState(false);
  const [changescene, setnextscene] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(10);
  const [showimage, setShowImage] = useState();

  const result = quiz.flatMap(({ quizzes }) => quizzes);

  //gets the value of the selected answer
  const checkAnswer = (e) => {
    // console.log(e.target.innerText);
    const choice = e.target.innerText;
    setChoiceMade(choice);
  };

  const handleClick = () => {
    choiceMade === result[0].questions[currentQuestion - 1].answer &&
      setShowImage(true);
    changeText && setShowImage(false);
    setChangeText((current) => !current);
    changeText && setCurrentQuestion(currentQuestion + 1);
    if (changeText) {
      setProgressBarWidth(progressBarWidth + 10);
      progressBarWidth === 100 && setProgressBarWidth(10);
    }
    if (!changeText) {
      if (choiceMade === result[2].questions[currentQuestion - 1].answer) {
        setScore(score + 1);
        setShowImage(true);
      } else {
        console.log("wrong");
        setShowImage(false);
      }
    }
    if (currentQuestion === 10) {
      setnextscene(true);
    }
  };

  const listItems = result[2].questions[currentQuestion - 1].options.map(
    (item) => (
      <li key={uuid()} value={item} className="mb-5">
        <button
          onClick={checkAnswer}
          className="dark:bg-[#3C4D68] w-full text-left text-[18px] bg-link-bg
        font-normal p-6  rounded-xl md:text-[28px]  md:leading-[34px]"
        >
          {item}
        </button>
      </li>
    )
  );
  const progressBar = {
    height: 10,
    width: progressBarWidth.toString() + "%",
  };
  return (
    <>
      {changescene ? (
        <ScorePage img={data[2].icon} title={data[2].title} score={score} />
      ) : (
        <>
          <QuestionPage
            question={result[2].questions[currentQuestion - 1].question}
            currentQuestion={currentQuestion}
            totalQuestion={result[2].questions.length}
            style={progressBar}
          />
          <OptionPage
            listItems={listItems}
            handleClick={handleClick}
            text={changeText ? "next question" : "submit text"}
            image={showimage && <img src={correct} />}
          />
        </>
      )}
    </>
  );
}
