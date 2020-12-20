import React from "react";

const Restaurant = ({ name, type }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  );
};

export default Restaurant;

// const myObj = {
//   name: "a;sdlkf",
//   type: "asdfa",
// };

// const name = myObj.name
// const type = myObj.type

// const {name, type} = myObj
