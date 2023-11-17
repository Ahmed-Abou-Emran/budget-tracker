import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-inline: 10rem;
  padding-block: 2rem;
`;
export default App;
