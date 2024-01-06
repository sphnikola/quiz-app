import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Container";
import { FrontPage } from "./pages/Frontpage";
import { Html } from "./pages/Html";
import { Css } from "./pages/Css";
import { JavaScript } from "./pages/Javascript";
import { Accessibility } from "./pages/Accessibility";
import { useState } from "react";

function App() {
  // const [isDark, setDark] = useState(false);
  // const toggleDark = () => {
  //   setDark(!isDark);
  //   const html = document.getElementsByTagName("html")[0];
  //   console.log(html);
  //   html.classList.toggle("dark");
  // };

  return (
    <>
      {/* <span
        id="darkmode"
        className="w-5 h-5 bg-white block 
    cursor-pointer"
        onClick={toggleDark}
      ></span> */}
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="html" element={<Html />} />
            <Route path="css" element={<Css />} />
            <Route path="javascript" element={<JavaScript />} />
            <Route path="accessibility" element={<Accessibility />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
