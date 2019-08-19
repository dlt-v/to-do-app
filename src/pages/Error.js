import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="main">
      <h1 className="main__message">
        Uh oh! Seems like you lost your way! <br />
        <Link to="/" className="main__message--action">
          Get back to the main page.
        </Link>
      </h1>
    </div>
  );
};

export default Error;
