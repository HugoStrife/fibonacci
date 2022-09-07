import "./App.css";
import React from "react";
import { fibonacci } from "./components/sequence";
function App() {
  const [number, setNumber] = React.useState();
  const [sequence, setSequence] = React.useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    if (!number || number === 0) {
      alert("You must enter a number!!");
    } else {
      setSequence(fibonacci(number));
    }
  };

  return (
    <div className="App">
      <h1>Simple Fibonacci Guesser</h1>
      <h2>Enter a number to get it's Fibonacci sequence</h2>
      <form onSubmit={handleClick}>
        <input
          type="number"
          min="1"
          max="10"
          onChange={(e) => setNumber(e.target.valueAsNumber)}
        />
        <button type="submit">Get the sequence!</button>
      </form>
      <h2>Result: {sequence.join(",")}</h2>
    </div>
  );
}

export default App;
