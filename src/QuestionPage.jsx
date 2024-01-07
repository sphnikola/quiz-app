export function QuestionPage(props) {
  return (
    <>
      <section className="flex flex-col ">
        <div className="flex flex-col-reverse">
          <h1 className="dark:text-white text-[20px] md:text-[36px] leading-[43.2px] lg:pr-1 font-medium md:mb-5 lg:mb-20">
            {props.question}
          </h1>
          <p className="dark:text-[#ADC2E1] text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
            Question {props.currentQuestion} of {props.totalQuestion}
          </p>
        </div>
        <div className="my-10 lg:my-0 ">
          <div className="border-1 bg-link-bg rounded-xl max-w-full">
            <div className=" bg-[#a729f5] rounded-xl" style={props.style}></div>
          </div>
        </div>
      </section>
    </>
  );
}
