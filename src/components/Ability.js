import React, { useState } from "react";

export default function Ability(props) {
  //const [statColor, setStatColor] = useState("");

  const colors = {
    hp: "#0033cc",
    attack: "#e60000",
    speed: "#ff6699",
    defense: "#00cc66",
    "special-attack": "#ffff66",
    "special-defense": "#66ffff",
  };
  //setStatColor("#aaaaaa");
  //console.log(statColor);

  const width = {
    width: `${props.value}%`,
    backgroundColor: colors[props.name],
  };

  return (
    <div className="ability">
      <p>{props.name}</p>
      <div className="progressbar">
        <div style={width}></div>
      </div>
    </div>
  );
}
