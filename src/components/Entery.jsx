import React from "react";
import emojisCollected from "../emojisCollected";
import Dt from "./Dt";
function singalEmoji(emoji) {
  console.log(emoji);
  return (
    <Dt
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
function Entry(props) {
  return (
    <div>
      <dl className="dictionary">{emojisCollected.map(singalEmoji)}</dl>
    </div>
  );
}

export default Entry;
