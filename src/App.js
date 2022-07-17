import React, { useState } from "react";
import "./styles.css";
import background from "./images.jpg";

var emojidictionary = {
  "😊": "Smiling Face",
  "🤩": "Star-Struck",
  "😪": "Sleepy Face",
  "😞": "Disappointed Face",
  "😐": "Neutral Face"
};

var emojiiknow = Object.keys(emojidictionary);

export default function App() {
  const [emojimeaning, setemojimeaning] = useState("");

  function emojiinput(event) {
    var userinput = event.target.value;

    var emojimeaning = emojidictionary[userinput];

    if (emojimeaning === undefined) {
      emojimeaning = "Emoji does not exist in our database !!";
    }
    setemojimeaning(emojimeaning);
  }

  function emojiclick(emoji) {
    var emojimeaning = emojidictionary[emoji];
    setemojimeaning(emojimeaning);
  }

  return (
    <div
      style={{
        background: `linear-gradient(to right, #c2e59c, #64b3f4)`,
        fontFamily: "initial"
      }}
      className="App"
    >
      <div
        style={{
          background: `Url(${background})`,
          height: "10vh"
        }}
      >
        <span
          style={{
            fontSize: "3rem",
            color: "Chartreuse",
            background: "white"
          }}
        >
          Emoji Interpreter
        </span>
      </div>

      <h2 style={{ color: "red", fontSize: "2.5rem" }}>
        {" "}
        Enter the Emoji <h5>( While Using on Windows press windows + . key)</h5>
      </h2>

      <input onChange={emojiinput} />

      <h2 style={{ color: "purple" }}> {emojimeaning}</h2>

      <h3 style={{ color: "blue" }}> Some famous emoji we know </h3>
      {emojiiknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclick(emoji)}
            style={{ fontSize: "2rem", padding: "1rem" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
