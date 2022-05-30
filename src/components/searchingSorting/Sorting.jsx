import React, { useState } from "react";
import userData from "../../data/userData.json";
import { v4 as uuid } from "uuid";

export default function Sorting() {
  const [user, setUser] = useState(userData);
  const [asc, setAsc] = useState(true);

  const handleSort = (val) => {
    let newData = user.sort((a, b) => {
      if (asc) {
        return a[val] < b[val] ? -1 : 1;
      } else {
        return a[val] > b[val] ? -1 : 1;
      }
    });
    setUser(newData);
    setAsc(!asc);
  };

  return (
    <div className="sorting">
      <h1>Sorting Demo</h1>
      <div className="flex flex_row header ">
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
