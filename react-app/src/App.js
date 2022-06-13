import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0); // this is called a hook; the first value is the variable, the second is a function to set the variable

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default App;
