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
      <button onClick={prevPage}><AiFillCaretLeft/></button>
        <span className="page">
          {currentPage}
        </span>
      <button onClick={nextPage}><AiFillCaretRight/></button>
      <div className="total">Total pages: {props.totalPages}</div>
    </div>
  );
};

export default Pagination;
