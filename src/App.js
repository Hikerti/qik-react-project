import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(0)
  const [value, setValue] = useState('Привет друг')

  function plus() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  function dec() {
    setCount(count * count)
  }

  function clear() {
    setCount(count * 0)
  }

  return (   
    <div className="App">
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={plus}></button>
      <button onClick={minus}>Минус</button>
      <button onClick={dec}>Умножить</button>
      <button onClick={clear}>Очистить</button>
    </div>
  );
}

export default App;
