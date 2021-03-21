import React from 'react'
import StyledHamburgerButton from './styles'

function NavHamburger() {
  return (
    <StyledHamburgerButton
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </StyledHamburgerButton>
  )
}

export default NavHamburger
