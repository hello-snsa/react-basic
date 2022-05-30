import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import userData from "../../data/userData.json";

export default function Searching() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (query) => {
    setText(query);
    //exact match: eg:- Alfie
    // let newData = userData.filter((e) => query === e.first_name);
    let newData = userData.filter(
      (e) =>
        e.first_name.toLowerCase().includes(query.toLowerCase()) && query !== ""
    );

    setData(newData);
  };

  return (
    <div>
      search:
      <input
        type="search"
        placeholder="search name"
        value={text}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <br />
      <br />
      <br />
      <div className="flex flex_row header ">
        <span>sl.no</span>
        <span>first_name</span>
        <span>last_name</span>
        <span>gender</span>
        <span>email</span>
      </div>
      <div>
        {data.length === 0 ? (
          <p>No data found</p>
        ) : (
          data.map((e, i) => {
            const { first_name, last_name, gender, email } = e;
            return (
              <div key={uuid()} className="flex flex_row t_data">
                <span>{i + 1}</span>
                <span>{first_name}</span>
                <span>{last_name}</span>
                <span>{gender}</span>
                <span>{email}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
