import html from "./assets/images/icon-html.svg";
import css from "./assets/images/icon-css.svg";
import js from "./assets/images/icon-js.svg";
import acsb from "./assets/images/icon-accessibility.svg";

function App() {
  return (
    <>
      <section className=" min-h-screen font-rubik">
        <div className=" max-w-7xl mx-auto px-[24px] lg:px-[64px]">
          <main className="grid lg:grid-cols-[repeat(2,1fr)] items-start">
            <section>
              <h1 className=" text-[40px] leading-[40px] md:text-[64px] md:leading-[64px] font-light">
                welcome to the
                <br /> <span className="f font-medium">
                  frontend quiz!
                </span>{" "}
              </h1>
              <p className="text-[14px] leading-[21px] italic font-light md:text-[20px] md:leading-[30px]">
                pick a subject to get started!
              </p>
            </section>
            <section>
              <ul>
                <li>
                  <a className="flex items-center">
                    <div>
                      <img src={html} className="w-[28px]" />
                    </div>
                    <div>
                      <h2>html</h2>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <div>
                      <img src={html} className="w-[28px]" />
                    </div>
                    <div>
                      <h2>html</h2>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <div>
                      <img src={html} className="w-[28px]" />
                    </div>
                    <div>
                      <h2>html</h2>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <div>
                      <img src={html} className="w-[28px]" />
                    </div>
                    <div>
                      <h2>html</h2>
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
