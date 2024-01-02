export function QuestionPage(props) {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col-reverse">
          <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
            {props.question}
          </h1>
          <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
            Question {props.currentQuestion} of {props.totalQuestion}
          </p>
        </div>
        <div>
          <p>progress bar</p>
        </div>
      </section>
    </>
  );
}
