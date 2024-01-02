import { quiz } from "../data/quiz";
import { useState } from "react";
import uuid from "react-uuid";

export function Html() {
  const [questionsLength, setQuestionsLength] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [choiceMade, setChoiceMade] = useState();
  const [selectColor, setSelectColor] = useState(false);
  const result = quiz.flatMap(({ quizzes }) => quizzes);
  //console.log(result[0].questions.length);
  //  console.log(result);
  //console.log(result[0].questions[0].options);
  // const choice = (e) => {
  //   console.log(e.target.innerText);
  //   if(e.target.innerText === result[0].questions[0].answer){

  //   }
  // };

  const checkAnswer = (e) => {
    // console.log(e.target.innerText);
    const choice = e.target.innerText;
    setChoiceMade(choice);
  };
  console.log(choiceMade);

  const handleClick = () => {
    if (choiceMade === result[0].questions[currentQuestion].answer) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const listItems = result[0].questions[currentQuestion].options.map((item) => (
    <li key={uuid()} value={item} className="mb-5">
      <button
        onClick={checkAnswer}
        className="flex gap-x-3  w-full items-center text-[18px] bg-link-bg  
        font-normal p-5  rounded-xl md:text-[28px]  md:leading-[34px]"
      >
        {item}
      </button>
    </li>
  ));
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col-reverse">
          <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
            {result[0].questions[currentQuestion].question}
          </h1>
          <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
            pick a subject to get started!
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
          Submit Answer
        </button>
      </section>
    </>
  );
}
