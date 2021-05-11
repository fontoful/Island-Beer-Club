import React from 'react'

const PaginationReact = ({ profilesPerPage, totalProfiles, paginate }) => {
  // init array
  const pageNumbers = []
  
  for (let i = 1; i < Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i)
  }
 
  return (
    <div>
      <ul className='pagination pt-3 d-flex flex-wrap justify-content-center align-items-center'>
        {
          pageNumbers.map(number => {
            let y = Math.ceil(number * 10 - 9)
            let x = Math.ceil(number * 10)
            return(
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
              {`${y}-${x}`}
            </a>
          </li>
        )})
      }
      </ul>
    </div>
  )
}

export default PaginationReact
