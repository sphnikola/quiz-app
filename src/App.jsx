import Container from "./Container";
import { FrontPage } from "./pages/Frontpage";
import { Html } from "./pages/Html";

function App() {
  return (
    <>
      <Container>
        <FrontPage />

        <Html />
      </Container>
    </>
  );
}

export default App;
