import logo from './logo.svg';
import './App.css';
import Button from "./components/Button"

function App() {

  let count = 0

  return (
    <div className="App">
      <Button increment={1}/>
      <Button increment={10}/>
      <Button increment={100}/>
      <Button increment={1000}/>
      <span>{count}</span>
    </div>
  );
}

export default App;
