import React from "react";
import imgsrc from "../../assets/congimg.png";
import "./Final.css";
const Final = () => {
  return (
    <>
      <h1 className="headcongo">Congrats Quiz is completed</h1>
      <img src={imgsrc} alt="congrats" />
      <h2 className="score">Your Score is 03/04</h2>
    </>
  );
};

export default Final;
