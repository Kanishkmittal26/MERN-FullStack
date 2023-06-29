import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia"

function createEmoji(props) {
  return (

    <Emoji
      key={props.id}
      id={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">

        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
