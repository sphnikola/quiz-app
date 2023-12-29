import html from "./assets/images/icon-html.svg";
import css from "./assets/images/icon-css.svg";
import js from "./assets/images/icon-js.svg";
import acsb from "./assets/images/icon-accessibility.svg";

export function ListItems() {
  return (
    <>
      <section>
        <ul className=" uppercase">
          <li className="mb-5 ">
            <a
              className="flex gap-x-3 items-center
                   text-[18px] hover:text-[24px] hover:leading-[24px] hover:duration-500 hover:ease-in-out
                   bg-link-bg  font-normal p-5  rounded-xl md:text-[28px] md:hover:text-[34px] md:leading-[34px]"
            >
              <div className="h-[40px] w-[40px] bg-html-bg-color rounded-md flex justify-center items-center">
                <img src={html} className="w-[28px] " />
              </div>
              <div className="">
                <h2>html</h2>
              </div>
            </a>
          </li>
          <li className="mb-5 ">
            <a
              className="flex gap-x-3 items-center
                   text-[18px] hover:text-[24px] hover:leading-[24px] hover:duration-500 hover:ease-in-out
                   bg-link-bg font-normal p-5  rounded-xl md:text-[28px] md:hover:text-[34px] md:leading-[34px]"
            >
              <div className="h-[40px] w-[40px] bg-css-bg-color  rounded-md flex justify-center items-center">
                <img src={css} className="w-[28px]" />
              </div>
              <div>
                <h2>css</h2>
              </div>
            </a>
          </li>
          <li className="mb-5 ">
            <a
              className="flex gap-x-3 items-center
                   text-[18px] hover:text-[24px] hover:leading-[24px] hover:duration-500 hover:ease-in-out
                   bg-link-bg font-normal p-5  rounded-xl md:text-[28px] md:hover:text-[34px] md:leading-[34px]"
            >
              <div className="h-[40px] w-[40px] bg-js-bg-color rounded-md flex justify-center items-center">
                <img src={js} className="w-[28px]" />
              </div>
              <div>
                <h2>javascript</h2>
              </div>
            </a>
          </li>
          <li className="mb-5 ">
            <a
              className="flex gap-x-3 items-center
                   text-[18px] hover:text-[24px] hover:leading-[24px] hover:duration-500 hover:ease-in-out
                   bg-link-bg  font-normal p-5  rounded-xl md:text-[28px] md:hover:text-[34px] md:leading-[34px]"
            >
              <div className="h-[40px] w-[40px] bg-ascb-bg-color rounded-md flex justify-center items-center">
                <img src={acsb} className="w-[28px]" />
              </div>
              <div>
                <h2>accessibility</h2>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
