import React, { useState } from "react";

const HelloWorld = () => {
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = useState(true);

  const onToogle = () => inputValue === "Hello World" && setVisible(!visible);
  const onInputChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <h1>Hello World</h1>
      <input id="search" type="text" onChange={onInputChange} />
      <button id="toggler" onClick={onToogle}>
        Toggle
      </button>
      {visible && <p>Foo Baz</p>}
    </div>
  );
};

export default HelloWorld;
