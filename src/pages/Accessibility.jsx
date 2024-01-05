import { quiz } from "../data/quiz";
import { data } from "../data/data";
import { useState } from "react";
import uuid from "react-uuid";
import { QuestionPage } from "../QuestionPage";
import { OptionPage } from "../OptionPage";
import { Link } from "react-router-dom";

export function Accessibility() {
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
      if (choiceMade === result[3].questions[currentQuestion - 1].answer) {
        setScore(score + 1);
      } else {
        console.log("wrong");
      }
    }
    if (currentQuestion === 10) {
      setnextscene(true);
    }
  };

  const listItems = result[3].questions[currentQuestion - 1].options.map(
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
        <>
          <section>
            <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
              quiz completed
              <br /> <span className="font-medium">you scored...</span>{" "}
            </h1>
          </section>
          <section className=" ">
            <div className="bg-link-bg flex flex-col items-center text-center gap-y-14 p-8 mb-10 rounded-2xl">
              <div className="flex items-center gap-x-4">
                <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center">
                  <img className="w-[28px]" src={data[3].icon} />
                </div>
                <div>
                  <h3 className=" text-lg md:text-[28px] font-semibold">
                    {data[3].title}
                  </h3>
                </div>
              </div>
              <div className="space-y-5">
                <h1 className=" text-[88px] md:text-[144px] font-semibold">
                  {score}
                </h1>
                <p className="text-lg md:text-[24px]">{score} 0f 10</p>
              </div>
            </div>
            <button
              className=" w-full text-[18px] bg-violet-500 font-normal p-5 
      rounded-xl md:text-[28px] md:leading-[34px]"
            >
              <Link to="/">play again</Link>
            </button>
          </section>
        </>
      ) : (
        <>
          <QuestionPage
            question={result[3].questions[currentQuestion - 1].question}
            currentQuestion={currentQuestion}
            totalQuestion={result[3].questions.length}
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
