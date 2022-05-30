import React, { useState } from "react";
import userData from "../../data/userData.json";
import { v4 as uuid } from "uuid";

export default function Filtering() {
  const [user, setUser] = useState(userData);
  const [type, setType] = useState(false);

  const handleSort = (val) => {
    let newData = user.sort((a, b) => {
      if (type) {
        return a[val] < b[val] ? -1 : 1;
      } else {
        return a[val] > b[val] ? -1 : 1;
      }
    });
    setUser(newData);
    setType(!type);
  };

  const handleFilter = (val) => {
    let newData = userData.filter((e) => e.gender === val);
    setUser(newData);
  };

  return (
    <div className="sorting">
      <h1>Filtering Demo</h1>

      <div className="flex flex_row header filter">
        <p>Filter by gender: </p>
        <span onClick={() => setUser(userData)}>All</span>
        <span onClick={() => handleFilter("Male")}>Male</span>
        <span onClick={() => handleFilter("Female")}>Female</span>
        <span onClick={() => handleFilter("Agender")}>Agender</span>
        <span onClick={() => handleFilter("Polygender")}>Polygender</span>
        <span onClick={() => handleFilter("Non-binary")}>Non-binary</span>
      </div>

      <div className="flex flex_row header">
        <span onClick={() => handleSort("id")}>sl.no</span>
        <span onClick={() => handleSort("first_name")}>first_name</span>
        <span onClick={() => handleSort("last_name")}>last_name</span>
        <span onClick={() => handleSort("gender")}>gender</span>
        <span onClick={() => handleSort("email")}>email</span>
      </div>
      <div>
        {console.log("user", user)}
        {user.map((e) => {
          const { id, first_name, last_name, gender, email } = e;
          return (
            <div key={uuid()} className="flex flex_row t_data">
              <span>{id}</span>
              <span>{first_name}</span>
              <span>{last_name}</span>
              <span>{gender}</span>
              <span>{email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
