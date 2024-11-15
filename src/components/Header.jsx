import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {" "}
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/`}>Employee</Link>
        <Link to={`/add-employee`}>Add Emoployee</Link>
      </header>
    </div>
  );
};

export default Header;
