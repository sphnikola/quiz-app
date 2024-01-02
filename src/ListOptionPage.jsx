export function ListOptionPage(props) {
  return (
    <>
      <li id={props.key} value={props.item} className="mb-5">
        <button
          onClick={props.checkAnswer}
          className="flex gap-x-3  w-full items-center text-[18px] bg-link-bg  
        font-normal p-5  rounded-xl md:text-[28px]  md:leading-[34px]"
        >
          {props.item}
        </button>
      </li>
    </>
  );
}
