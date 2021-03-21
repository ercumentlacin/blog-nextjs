import Link from 'next/link'
import React from 'react'
import StyledNavItem from './styles'

function NavItem({ active = false, href, name }) {
  return (
    <StyledNavItem className="nav-item">
      <Link href={href}>
        <a className={`nav-link ${active ? 'active' : ''}`} aria-current="page">
          {name}
        </a>
      </Link>
    </StyledNavItem>
  )
}

export default NavItem
