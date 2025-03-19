import React from "react";

export default function PageNation({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            style={{ marginLeft: "1px" }}
            className="page-number"
          >
            <a onClick={() => paginate(number)} className="page-link">
              {" "}
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
