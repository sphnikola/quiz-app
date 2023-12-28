import html from "./assets/images/icon-html.svg";
import css from "./assets/images/icon-css.svg";
import js from "./assets/images/icon-js.svg";
import acsb from "./assets/images/icon-accessibility.svg";

function App() {
  return (
    <>
      <section className=" min-h-screen">
        <div className=" max-w-7xl mx-auto px-[24px] lg:px-[64px]">
          <main className="grid lg:grid-cols-[repeat(2,1fr)] items-start">
            <section>
              <h1>welcome to the frontend quiz!</h1>
              <p>pick a subject to get started</p>
            </section>
            <section>
              <ul>
                <li>
                  <a className="flex items-center">
                    <div>
                      <img src={html} />
                    </div>
                    <div>
                      <h2>html</h2>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <img src={html} />
                    <span>
                      <h2>html</h2>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <img src={html} />
                    <span>
                      <h2>html</h2>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <img src={html} />
                    <span>
                      <h2>html</h2>
                    </span>
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
