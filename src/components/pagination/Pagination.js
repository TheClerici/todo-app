import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import './Pagination.css'

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage !== props.totalPages) {
        setCurrentPage(currentPage + 1);
        props.onPageChange(currentPage + 1);
        return;
    }
    props.onPageChange(currentPage)
  };

  const prevPage = () => {
    if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
        props.onPageChange(currentPage - 1);
        return;
    }
    props.onPageChange(currentPage)
  };

  return (
    <div className="pagination">
      <button className={currentPage !== 1 ? "button" : "button-inv"} onClick={prevPage}><AiFillCaretLeft/></button>
        <span className={currentPage !== 1 ? "sidepage-left" : "sidepage-left-inv"}>{currentPage - 1}...</span>
        <span className="page">{currentPage}</span>
        <span className={currentPage !== props.totalPages ? "sidepage-right" : "sidepage-right-inv"}>...{currentPage + 1}</span>
      <button className={currentPage !== props.totalPages ? "button" : "button-inv"} onClick={nextPage}><AiFillCaretRight/></button>
    </div>
  );
};

export default Pagination;