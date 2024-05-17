import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage - 1)} type="button">
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <button onClick={() => paginate(number)} type="button">
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? 'disabled' : ''
          }`}
        >
          <button onClick={() => paginate(currentPage + 1)} type="button">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
