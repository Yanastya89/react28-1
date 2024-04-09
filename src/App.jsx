import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const upperCaseText = text.toUpperCase();
    setDisplayedText((prevLines) => [...prevLines, " ", ...upperCaseText]);
    setText("");
  };

  return (
    <>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleClick}>Вывести текст на экран</button>
      <p>{displayedText}</p>
    </>
  );
}

export default App;
