import React from 'react'
// components
import NavHamburger from './NavHamburger'
import NavItems from './NavItems'
import NavSearch from './NavSearch'

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <NavBrand href="/" className="navbar-brand" name="my logo" /> */}
        <NavHamburger />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavItems />
          <NavSearch />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
