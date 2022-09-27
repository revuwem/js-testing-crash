import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onToggleClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 500);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button data-testid="toggle-btn" onClick={onToggleClick}>
        Click me
      </button>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      {data && <div style={{ color: "red" }}>data</div>}
      {toggle && <span data-testid="toggle-info">toggled</span>}
      <span data-testid="input-value">{inputValue}</span>
    </div>
  );
}

export default App;
