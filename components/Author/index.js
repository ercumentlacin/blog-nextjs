import Link from 'next/link'
import React from 'react'
import AuthorStyled from './styles'

function Author() {
  return (
    <AuthorStyled className="col-lg-3 border-top border-2 px-0 px-lg-2">
      <div className="author d-flex px-2 py-3 mt-3 align-items-center">
        <div className="author-text d-flex flex-column flex-grow-1 me-2">
          <strong>Ercüment Laçın</strong>
          <Link href="https://medium.com/feed/@ercumentlacin">
            <a>
              <button
                type="button"
                class="btn btn-outline-dark rounded-0 fw-bold my-2 border-2"
              >
                MEDIUM NOW
              </button>
            </a>
          </Link>
        </div>
        <div className="author-image">
          <img src="/ercument-lacin.jpg" alt="Ercüment Laçın" />
        </div>
      </div>
    </AuthorStyled>
  )
}

export default Author
