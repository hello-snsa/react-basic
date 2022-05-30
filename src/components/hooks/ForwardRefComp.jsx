import React, { useRef, forwardRef, useState } from "react";

function ForwardRefComp(props, ref) {
  const [data, setData] = useState();

  const handleFocus = () => {
    ref.current.focus();
    // ref.current.value = "hey";
  };

  return (
    <>
      <h1>Forward Ref</h1>
      <input type="text" ref={ref} />
      <button onClick={handleFocus}>Focus from child</button>

      {data && <h1>Data: {data}</h1>}
    </>
  );
}
export default forwardRef(ForwardRefComp);
