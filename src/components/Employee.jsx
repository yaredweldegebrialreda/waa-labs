import React from "react";
import { Link } from "react-router-dom";

const Employee = ({ empData }) => {
  const { name, id } = empData;

  return (
    <Link to={`/employees/${id}`}>
      <div
        style={{
          height: 150,
          width: 150,
          backgroundColor: "grey",
          padding: "10px 20px",
          margin: 20,
        }}
      >
        <p>{id}</p>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default Employee;
