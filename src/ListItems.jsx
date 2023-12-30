import { data } from "./data/data";

export function ListItems() {
  const listItems = data.map((lit) => (
    <li key={lit.id} className="mb-5 ">
      <a
        className="flex gap-x-3 items-center
           text-[18px] hover:text-[24px] hover:leading-[24px] hover:duration-500 hover:ease-in-out
           bg-link-bg  font-normal p-5  rounded-xl md:text-[28px] md:hover:text-[34px] md:leading-[34px]"
      >
        <div
          className="h-[40px] w-[40px] rounded-md flex justify-center items-center"
          style={{ backgroundColor: lit.color }}
        >
          <img src={lit.icon} className="w-[28px] " />
        </div>
        <div className="">
          <h2>{lit.title}</h2>
        </div>
      </a>
    </li>
  ));
  return (
    <>
      <section>
        <ul className=" uppercase">{listItems}</ul>
      </section>
    </>
  );
}
