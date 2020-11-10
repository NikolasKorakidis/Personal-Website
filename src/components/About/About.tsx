import React from "react";
import picture from "./pictures/download.png";

export default function About() {
  return (
    <div>
      <div>
        <img src={picture} alt="The face of Nikolas"></img>
        <p>soem staff</p>
      </div>
      <h1>About Me</h1>
    </div>
  );
}
