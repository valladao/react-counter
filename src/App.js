import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"

function App() {

  let count = 0

  const incrementCount = increment => {
    //TODO
  }

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  );
}

export default App;
