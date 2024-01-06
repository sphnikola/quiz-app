export function OptionPage(props) {
  return (
    <>
      <section>
        <ol type="A" className="w-full">
          {props.listItems}
        </ol>
        <button
          onClick={props.handleClick}
          className=" w-full text-[18px] bg-violet-500 font-normal p-5 
      rounded-xl md:text-[28px] md:leading-[34px]"
        >
          {props.text}
          {/* {changeText ? "next question" : "submit text"} */}
        </button>
      </section>
    </>
  );
}
