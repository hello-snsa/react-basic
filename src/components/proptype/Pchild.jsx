import React from "react";
import propTypes from "prop-types";

function Pchild({ name, age }) {
  return (
    <div>
      <h1> with proptype</h1>
      <p>Name: {name}</p>
      <p>Age: {age + 10}</p>
    </div>
  );
}
Pchild.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired,
};

export default Pchild;
