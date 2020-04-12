import React, { Component } from "react";

export default function Pokemon(props) {
  let search = "search";

  if (props.isActive) {
    search += " active";
  }

  return (
    <div className={search}>
      <input
        type="text"
        onChange={props.handleInput}
        placeholder="Find Pokemon"
      ></input>
    </div>
  );
}
