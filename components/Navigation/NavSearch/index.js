import React from 'react'

function NavSearch() {
  return (
    <div className="d-flex">
      <input
        className="div-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-dark rounded-0" type="button">
        Search
      </button>
    </div>
  )
}

export default NavSearch
