import React from "react";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

export default function Pagination(props) {
  return (
    <div className="pagination">
      <img
        src={prev}
        onClick={props.toPrevPage}
        className="paginationBtn leftBtn"
      ></img>
      <img
        src={next}
        onClick={props.toNextPage}
        className="paginationBtn rightBtn"
      ></img>
    </div>
  );
}
