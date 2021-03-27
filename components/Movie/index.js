import Link from 'next/link'
import React from 'react'
import MovieStyled from './styles'

function Movie({ title, paragraph, src, href }) {
  const shortParagraph = `${paragraph.substring(0, 120)}...`
  return (
    <MovieStyled className="d-flex px-2 py-3 border-top border-2">
      <div className="movie__text">
        <h4>{title}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: shortParagraph
          }}
        />
        <Link href={href}>
          <a target="_blank">
            WATCH VIDEO <i className="fas fa-long-arrow-alt-right"></i>
          </a>
        </Link>
      </div>
      <div>
        <img className="img-fluid" src={src} alt={title} />
      </div>
    </MovieStyled>
  )
}

export default Movie
