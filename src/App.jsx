import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./Container";
import { FrontPage } from "./pages/Frontpage";
import { Html } from "./pages/Html";
import { Css } from "./pages/Css";
import { JavaScript } from "./pages/Javascript";
import { Accessibility } from "./pages/Accessibility";

function App() {
  return (
    <>
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
