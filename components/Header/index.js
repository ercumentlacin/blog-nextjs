import React from 'react'
import Image from 'next/image'
import Moment from 'react-moment'
import HeaderStyled from './styles'

function Header() {
  const date = new Date()
  return (
    <HeaderStyled className="header">
      <div className="row align-items-center">
        <div className="col-sm-3 col-lg-3">
          <div className="brand d-flex flex-column">
            <h1>Ercument Lacin</h1>
            <div className="spans">
              <span>JavaScript</span>
              <span> &bull; React JS &bull; </span>
              <span>CSS</span>
            </div>
          </div>
        </div>
        <div className="col-sm-7 col-sm-offset-1 col-lg-4 offset-lg-1 cuff text-center">
          <div className="d-flex flex-column">
            <h2>FRONTEND FACTORY</h2>
            <div className="date d-flex align-items-center justify-content-center">
              <span></span>
              <time>
                <Moment format="MMMM DD, YYYY">{date}</Moment>
              </time>
              <span></span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 ms-auto d-none d-lg-block">
          <Image src="/sega.jpg" alt="Sega" width={'auto'} height={88} />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header
