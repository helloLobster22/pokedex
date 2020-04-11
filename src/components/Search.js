import React, { Component } from "react";

export default function Pokemon(props) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={props.handleInput}
        placeholder="Find Pokemon"
      ></input>
    </div>
  );
}
