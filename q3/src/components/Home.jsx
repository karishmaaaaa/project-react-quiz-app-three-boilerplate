import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="front">
      <h1>Quiz App</h1>
      <Link to="/game">
        <button className="begin">Play</button>
      </Link>
    </div>
  );
};

export default HomeComponent;