import React from "react";
import Ability from "./Ability";

export default function AbilitiesCard(props) {
  return (
    <div>
      {props.stats.map((stat) => (
        <Ability
          key={stat.stat.name}
          name={stat.stat.name}
          value={stat["base_stat"]}
        />
      ))}
    </div>
  );
}
