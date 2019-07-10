import React, { useState } from "react";
import Type1 from "./Type1";
import Type2 from "./Type2";
import "./App.css";

const showComponent = () => ({
  1: <Type1 />,
  2: <Type2 />
});

const App = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="App">
      <button onClick={() => setValue(1)}>Type 1</button>
      <button onClick={() => setValue(2)}>Type 2</button>
      {showComponent()[value]}
    </div>
  );
};

export default App;
