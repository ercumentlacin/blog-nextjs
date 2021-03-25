import React from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { ArticleStyled } from './styles'
import Moment from 'react-moment'
import Link from 'next/link'
import string_to_slug from '../../helpers/titleToSlug'

function MainSection({ items }) {
  console.log(items)

  const regex = /<p>(.*?)<\/p>/

  return (
    <div className="col-md-6 p-3 border border-2">
      <div className="d-flex flex-column">
        {items.map(
          ({ thumbnail, title, categories, content, author, pubDate }) => {
            const corresp = regex.exec(
              content.replace(/<img(.*?)(width=\"1\")(.*?)>/, '')
            )
            const firstParagraph = corresp ? corresp[0] : ''
            return (
              <ArticleStyled className="border-bottom mb-4 pb-4" key={uuidv4()}>
                {/* image */}
                <div className="d-flex justify-content-center">
                  <Image
                    key={uuidv4()}
                    src={thumbnail}
                    alt={title}
                    width={474}
                    height={262}
                  />
                </div>
                {/* categories */}
                <div className="d-flex align-items-center my-3">
                  <span className="categories">{categories.join(', ')}</span>
                  <div className="ms-auto">
                    <Link
                      href={`/post/${encodeURIComponent(
                        string_to_slug(title)
                      )}`}
                    >
                      <a>
                        <i
                          title="Devamını oku"
                          className="fas fa-directions"
                        ></i>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* title */}
                <h2>{title}</h2>
                {/* first paragraph */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: firstParagraph
                  }}
                />
                {/* author */}
                <div className="d-flex">
                  <div className="me-2">
                    <Image
                      src="/ercument-lacin.jpg"
                      alt={author}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <strong>{author}</strong>
                    <time>
                      <Moment format="MMMM DD, YYYY">{pubDate}</Moment>
                    </time>
                  </div>
                </div>
              </ArticleStyled>
            )
          }
        )}
      </div>
    </div>
  )
}

export default MainSection
