import React, { useEffect, useRef, useState } from "react";
import ForwardRefComp from "./ForwardRefComp";

export default function FocusInp() {
  const inpRef = useRef(null);

  const handleFocus = () => {
    inpRef.current.focus();
    inpRef.current.value = "hello";
  };

  return (
    <div>
      <input type="text" ref={inpRef} />
      <br />
      <br />
      <button onClick={handleFocus}>Focus</button>

      {/* <ForwardRefComp ref={inpRef} /> */}
    </div>
  );
}
