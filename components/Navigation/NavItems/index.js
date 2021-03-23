import React from 'react'
import NavItem from '../NavItem'
import { useRouter } from 'next/router'

function NavItems() {
  let router = useRouter()
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavItem
        active={router.pathname === '/' ? true : false}
        href="/"
        name="Ana sayfa"
      />
      <NavItem
        active={router.pathname === '/about' ? true : false}
        href="/about"
        name="Hakkımda"
      />
      <NavItem
        active={router.pathname === 'javascript' ? true : false}
        href="/javascript"
        name="JavaScript"
      />
      <NavItem
        active={router.pathname === '/react' ? true : false}
        href="/react"
        name="React"
      />
      <NavItem
        active={router.pathname === 'css' ? true : false}
        href="/css"
        name="CSS"
      />
    </ul>
  )
}

export default NavItems
