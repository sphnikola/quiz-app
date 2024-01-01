import { quiz } from "../data/quiz";
import { useState } from "react";

export function Html() {
  const result = quiz.flatMap(({ quizzes }) => quizzes);

  console.log(result[0].questions[0].question);

  return (
    <>
      <section>
        <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
          Welcome to the
          <br /> <span className="font-medium">Frontend Quiz!</span>{" "}
        </h1>
        <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
          pick a subject to get started!
        </p>
      </section>
    </>
  );
}
