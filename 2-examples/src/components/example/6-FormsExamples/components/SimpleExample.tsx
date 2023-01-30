import React, { useState } from "react";

// name, avatar, address
function SimpleExample() {
  const [name, setName] = useState("Peter");
  const [gender, setGender] = useState("unknown");
  const [children, setChildren] = useState(true);
  const [country, setCountry] = useState("VN");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // event of form
    e.preventDefault();
    console.log("Name:", name);
    console.log("Gender:", gender);
    console.log("Children:", children);
    console.log("Country:", country);
  };
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  // input params : event : params
  const handleOnchange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  return (
    <div className=" d-flex justify-content-center m-3">
      <div className="border border-light rounded p-3">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="text"
            name="userName"
            value={name}
            onChange={(e) => {
              console.log(e.target.name);
              setName(e.target.value);
            }}
          />
          <hr />

          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender("man");
            }}
          />
          <label htmlFor="gender">Man</label>

          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender("woman");
            }}
          />
          <label htmlFor="gender">Woman</label>

          <input
            type="radio"
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender("unknown");
            }}
          />
          <label htmlFor="gender">Unknown</label>
          <hr />

          <input
            type="checkbox"
            name="children"
            onChange={(e) => {
              setChildren(e.target.checked);
            }}
          />
          <label htmlFor="children">Children</label>
          <hr />
          <select
            name="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="VN">Vietnam</option>
            <option value="US">United State</option>
            <option value="JP">Japan</option>
          </select>
          <hr />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SimpleExample;
