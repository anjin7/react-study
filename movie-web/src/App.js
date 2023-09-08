import Button from './Button';
import styled from './App.module.css'

function App() {
  return (
    <div className="App">
      <h1 className={styled.title}>Hello</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
