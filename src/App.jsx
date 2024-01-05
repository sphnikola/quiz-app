import { Link, Route, Routes } from "react-router-dom";

import Container from "./Container";
import { FrontPage } from "./pages/Frontpage";
import { Html } from "./pages/Html";
import { Css } from "./pages/Css";
import { JavaScript } from "./pages/Javascript";
import { Accessibility } from "./pages/Accessibility";

function App() {
  return (
    <>
      <Container>
        <FrontPage />
        {/* <Html />
        <Css />
        <JavaScript />
        <Accessibility /> */}
      </Container>
    </>
    // <>
    //   <Container>
    //     <FrontPage />

    //     <Html />
    //   </Container>
    // </>
  );
}

export default App;
