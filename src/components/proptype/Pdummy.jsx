import React from "react";

export default function Pdummy({ name, age }) {
  return (
    <div>
      <h1>without proptype</h1>
      <p>Name: {name}</p>
      <p>Age: {age + 10}</p>
    </div>
  );
}
