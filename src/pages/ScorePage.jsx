import { Link } from "react-router-dom";

export function ScorePage(props) {
  return (
    <>
      <section>
        <h1 className="dark:text-white text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
          quiz completed
          <br /> <span className="font-medium">you scored...</span>{" "}
        </h1>
      </section>
      <section className=" ">
        <div className="bg-link-bg flex flex-col items-center text-center gap-y-14 p-8 mb-10 rounded-2xl">
          <div className="flex items-center gap-x-4">
            <div className="h-[40px] w-[40px] rounded-md flex justify-center items-center">
              <img className="w-[28px]" src={props.img} />
            </div>
            <div>
              <h3 className=" text-lg md:text-[28px] font-semibold">
                {props.title}
              </h3>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className=" text-[88px] md:text-[144px] font-semibold">
              {props.score}
            </h1>
            <p className="text-lg md:text-[24px]">{props.score} 0f 10</p>
          </div>
        </div>
        <button
          className=" w-full text-[18px] bg-[#a729f5] font-normal p-5 
      rounded-xl md:text-[28px] md:leading-[34px]"
        >
          <Link to="/">play again</Link>
        </button>
      </section>
    </>
  );
}
