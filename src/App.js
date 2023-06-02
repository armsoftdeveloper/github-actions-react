import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [count , setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div>
        {count}
      </div>
      <div className="row">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
