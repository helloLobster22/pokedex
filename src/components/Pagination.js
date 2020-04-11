import React from "react";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

export default function Pagination(props) {
  return (
    <div className="pagination">
      <img
        src={prev}
        onClick={props.toPrevPage}
        style={{ left: "10px" }}
        className="paginationBtn"
      ></img>
      <img
        src={next}
        onClick={props.toNextPage}
        style={{ left: "115px" }}
        className="paginationBtn"
      ></img>
    </div>
  );
}
