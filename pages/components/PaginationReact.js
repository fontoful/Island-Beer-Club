import React from 'react'

const PaginationReact = ({ profilesPerPage, totalProfiles, paginate }) => {
  // init array
  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PaginationReact
