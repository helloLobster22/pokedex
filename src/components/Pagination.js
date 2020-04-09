import React from "react";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

export default function Pagination({ toNextPage, toPrevPage }) {
  return (
    <div className="pagination">
      <img src={prev} onClick={toPrevPage} className="paginationBtn"></img>
      <img src={next} onClick={toNextPage} className="paginationBtn"></img>
    </div>
  );
}
