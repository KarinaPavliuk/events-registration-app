// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import css from './paginationPage.module.css';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={css.pagination}>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className={css.paginationButton}
            onClick={() => paginate(currentPage - 1)}
            type="button"
          >
            &#x2190;
          </button>
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            <button
              className={css.paginationButton}
              onClick={() => paginate(number)}
              type="button"
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageNumbers.length ? 'disabled' : ''
          }`}
        >
          <button
            className={css.paginationButton}
            onClick={() => paginate(currentPage + 1)}
            type="button"
          >
            &#x2192;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
