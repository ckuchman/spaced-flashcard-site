import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import LandingPage from "./components/landing";

function App() {
  return (
    <>
      <Container
        className="center"
        fluid="md"
        style={{ textAlign: "center", marginTop: "10%" }}
      >
        <LandingPage />
      </Container>
    </>
  );
}

export default App;
