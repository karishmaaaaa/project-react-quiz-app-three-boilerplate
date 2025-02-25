import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ResultComponent = () => {
  const storedScore = localStorage.getItem("score");
  const storedQuestionsWrong = localStorage.getItem("questionsWrong");
  const storedQuestionsAttempted = localStorage.getItem("questionsAttempted");

  const percentage = (parseInt(storedScore, 10) / parseInt(storedQuestionsAttempted, 10)) * 100 || 0;

  return (
    <div className="final">
      <h1 className="result">Result</h1>
      <div className="comm">
        <h3>You need more practice!</h3>
        <p className="score">
          Your score is{" "}
          {(
            (parseInt(storedScore, 10) /
              parseInt(storedQuestionsAttempted, 10)) *
            100
          ).toFixed(2)}
          %
        </p>
        <div>
          <div className="Details">
            <b>Total number of questions</b>
            <b>15</b>
          </div>
          <div className="Details">
            <b>Number of attempted questions</b>
            <b>{storedQuestionsAttempted}</b>
          </div>
          <div className="Details">
            <b>Number of correct answers</b>
            <b>{storedScore}</b>
          </div>
          <div className="Details">
            <b>Number of wrong answers</b>
            <b>{storedQuestionsWrong}</b>
          </div>
        </div>
      </div>

      <div className="Btns">
        <Link to="/game">
          <button className="once">Play Again</button>
        </Link>
        <Link to="/">
          <button className="return">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ResultComponent;