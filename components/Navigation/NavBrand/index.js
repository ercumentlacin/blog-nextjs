import Link from 'next/link'
import React from 'react'

function NavBrand({ href = '/', className, name }) {
  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  )
}

export default NavBrand
