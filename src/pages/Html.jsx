import { quiz } from "../data/quiz";
import { useState } from "react";
import uuid from "react-uuid";

export function Html() {
  const [questionsLength, setQuestionsLength] = useState();
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
    if (changeText) {
      if (choiceMade === result[0].questions[currentQuestion].answer) {
        console.log("correct");
      } else {
        console.log("wrong");
      }
    }
    if (currentQuestion === 10) {
      setnextscene(true);
    }

    changeText && setCurrentQuestion(currentQuestion + 1);
  };

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
        <h2>ok</h2>
      ) : (
        <>
          {" "}
          <section className="flex flex-col">
            <div className="flex flex-col-reverse">
              <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
                {result[0].questions[currentQuestion - 1].question}
              </h1>
              <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
                Question {currentQuestion} of {result[0].questions.length}
              </p>
            </div>
            <div>
              <p>progress bar</p>
            </div>
          </section>
          <section>
            <ol type="A">{listItems}</ol>
            <button
              onClick={handleClick}
              className=" w-full text-[18px] bg-violet-500 font-normal p-5 
      rounded-xl md:text-[28px] md:leading-[34px]"
            >
              {changeText ? "next question" : "submit text"}
            </button>
          </section>
        </>
      )}
      {/* <section className="flex flex-col">
        <div className="flex flex-col-reverse">
          <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
            {result[0].questions[currentQuestion].question}
          </h1>
          <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
            Question {currentQuestion + 1} of {result[0].questions.length}
          </p>
        </div>
        <div>
          <p>progress bar</p>
        </div>
      </section>
      <section>
        <ol type="A">{listItems}</ol>
        <button
          onClick={handleClick}
          className=" w-full text-[18px] bg-violet-500 font-normal p-5 
          rounded-xl md:text-[28px] md:leading-[34px]"
        >
          {changeText ? "next question" : "submit text"}
        </button>
      </section> */}
    </>
  );
}
