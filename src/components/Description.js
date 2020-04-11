import React from "react";

export default function Description(props) {
  return (
    <div className="description">
      <p>
        <span>Height: {props.height} ft.</span>
        <span>Weight: {props.height} Ibs.</span>
      </p>
      <p>Abilities: | {props.abilities.map((a) => a.ability.name + " | ")}</p>
    </div>
  );
}
