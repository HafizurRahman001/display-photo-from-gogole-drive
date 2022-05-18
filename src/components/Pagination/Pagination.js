import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <nav>
                <ul className='pagination my-3'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='#!' className={` page-link pagination-style shadow-none ${currentPage === number ? 'active' : ''}`}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;