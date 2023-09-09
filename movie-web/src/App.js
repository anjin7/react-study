import Button from './Button';
import styled from './App.module.css';
import { useState } from "react";

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div className="App">
      <button onClick={onClick}>{ showing ? "Hide" : "Show" }</button>
    </div>
  );
}

export default App;
