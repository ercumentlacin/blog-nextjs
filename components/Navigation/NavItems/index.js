import React from 'react'
import NavItem from '../NavItem'

function NavItems() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavItem active href="/" name="Ana sayfa" />
      <NavItem active href="/about" name="Hakkımda" />
    </ul>
  )
}

export default NavItems
