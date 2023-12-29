import html from "./assets/images/icon-html.svg";
import css from "./assets/images/icon-css.svg";
import js from "./assets/images/icon-js.svg";
import acsb from "./assets/images/icon-accessibility.svg";

function App() {
  return (
    <>
      <section className=" min-h-screen font-rubik text-color-text">
        <div className=" max-w-7xl mx-auto px-[24px] lg:px-[64px]">
          <main className="grid lg:grid-cols-[repeat(2,1fr)] items-start">
            <section>
              <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px]   font-thin mb-8 md:mb-5 lg:mb-20">
                Welcome to the
                <br /> <span className="font-medium">Frontend Quiz!</span>{" "}
              </h1>
              <p className="text-[14px] leading-[21px] italic font-light mb-12 md:text-[20px] md:leading-[30px]">
                pick a subject to get started!
              </p>
            </section>
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
          </main>
        </div>
      </section>
    </>
  );
}

export default App;
