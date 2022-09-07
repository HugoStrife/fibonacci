import "./App.css";

import React, { useContext, useState } from "react";

import { fibonacci } from "./components/sequence";

function App() {
  return (
    <div className="App">
      <h1>Simple Fibonacci Guesser</h1>
      <h2>Enter a number to get it's Fibonacci sequence</h2>
      <SequenceProvider>
        <Form />
        <Result />
      </SequenceProvider>
    </div>
  );
}

export default App;

// Form.jsx
const Form = () => {
  const [number, setNumber] = React.useState();
  const sequenceContext = useContext(SequenceContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (!number || number === 0) {
      alert("You must enter a number!!");
    } else {
      const seq = fibonacci(number);
      sequenceContext.setSequence(seq);
    }
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="number"
        min="1"
        max="10"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <button type="submit">Get the sequence!</button>
    </form>
  );
};

// Result.jsx
const Result = () => {
  const { sequence } = useContext(SequenceContext);

  return <h2>Result: {sequence.join(",")}</h2>;
};

// Context
const SequenceContext = React.createContext({
  sequence: null,
  setSequence: null,
});

const SequenceProvider = ({ children }) => {
  const [sequence, setSequence] = useState();

  return (
    <SequenceContext.Provider value={(sequence, setSequence)}>
      {children}
    </SequenceContext.Provider>
  );
};
