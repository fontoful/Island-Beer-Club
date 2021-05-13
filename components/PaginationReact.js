import React from 'react'

const PaginationReact = ({ profilesPerPage, totalProfiles, paginate }) => {
  // init array
  const pageNumbers = []
  
  for (let i = 1; i < Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i)
  }
 
  return (
    <>
        {
          pageNumbers.map(number => {
            let difference = profilesPerPage -1
            let firstNumber = Math.ceil(number * profilesPerPage - difference)
            let lastNumber = Math.ceil(number * profilesPerPage)
            return(
          
            <a key={number} onClick={() => paginate(number)} href='#' className='paginate d-flex align-items-center justify-content-center'>
              {`${firstNumber}-${lastNumber <= totalProfiles ? lastNumber : totalProfiles}`}
            </a>

        )})
      }
    </> 
  )
}

export default PaginationReact
