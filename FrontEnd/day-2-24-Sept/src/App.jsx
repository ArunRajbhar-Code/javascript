import "./App.css";
import Button from "./Button";

function App() {
  var button = [1, 2, 3];
  var name = "hari";
  return (
    <>
      <h2 key={1}>Second Day {name}</h2>
      <h2>third day</h2>
      <Button button={button}></Button>
    </>
  );
}

export default App;
