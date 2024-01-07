export function OptionPage(props) {
  return (
    <>
      <section className="dark:text-white">
        <div className="flex">
          <ol type="A" className="w-full ">
            {props.listItems}
          </ol>
          {props.image}
        </div>
        <button
          onClick={props.handleClick}
          className=" w-full text-[18px] bg-[#a729f5] font-normal p-5 
      rounded-xl md:text-[28px] md:leading-[34px]"
        >
          {props.text}
          {/* {changeText ? "next question" : "submit text"} */}
        </button>
      </section>
    </>
  );
}
