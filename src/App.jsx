import { ListItems } from "./ListItems";
import { FrontPageWelcomeText } from "./FrontPageWelcomeText";
import Container from "./Container";

function App() {
  return (
    <>
      <Container>
        <FrontPageWelcomeText />
        <ListItems />
      </Container>
    </>
  );
}

export default App;
