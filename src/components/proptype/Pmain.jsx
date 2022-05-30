import React from "react";
import Pchild from "./Pchild";
import Pdummy from "./Pdummy";

export default function Pmain() {
  return (
    <div>
      {/* <h1>PMain</h1> */}
      {/* <Pdummy name="Ali" age="10" /> */}
      {/* <Pchild name="Ali" age="10" /> */}
      {/* <Pchild age={10} /> */}
      <Pchild name="Ali" />
    </div>
  );
}
