import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        {" "}
        <br />
        <strong>{props.meaning.partOfSpeech}</strong>
      </p>
      <div> {props.meaning.definition} </div>
      <em> {props.meaning.example} </em>
    </div>
  );
}
