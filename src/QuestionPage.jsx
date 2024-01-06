export function QuestionPage(props) {
  return (
    <>
      <section className="flex flex-col ">
        <div className="flex flex-col-reverse">
          <h1 className=" text-[20px] md:text-[36px] leading-[43.2px]  lg:pr-5 font-thin mb-8 md:mb-5 lg:mb-20">
            {props.question}
          </h1>
          <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
            Question {props.currentQuestion} of {props.totalQuestion}
          </p>
        </div>
        <div className=" ">
          <p className="">progress bar</p>
        </div>
      </section>
    </>
  );
}
