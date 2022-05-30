import React, { useRef, useState } from "react";
import FocusInp from "./FocusInp";
import ForwardRefComp from "./ForwardRefComp";
let render = 1;

export default function RefComp() {
  const inpRef = useRef(null);

  const [text, setText] = useState("");
  const [data, setData] = useState();

  console.log("rendered", render++);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setData(text);
    setData(inpRef.current.value);
  };
  console.log("text", text);

  return (
    <>
      <h1>Ref</h1>
      <form onSubmit={handleSubmit}>
        {/* //state variable dependent */}
        Normal:{" "}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        with useRef:
        <input type="text" ref={inpRef} />
        <br />
        <br />
        <input type="submit" />
      </form>
      {data && <h1>Data: {data}</h1>}
    </>
  );
}
