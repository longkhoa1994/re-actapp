import React from "react";

function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    //Fragment is default for wrap all items inside
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">
              {item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
