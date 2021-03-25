import unfetch from 'isomorphic-unfetch'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import string_to_slug from '../../helpers/titleToSlug'
import Moment from 'react-moment'
import Image from 'next/image'
import { ArticlePostStyled } from './styles'

const Post = ({ items }) => {
  const router = useRouter()
  const { pid } = router.query
  console.log(items)
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          {items.map(({ title, categories, content, author, pubDate }) => (
            <ArticlePostStyled key={uuidv4()}>
              <header>
                {/* title */}
                <h2>{title}</h2>
                {/* categories */}
                <div className="d-flex align-items-center my-3">
                  <span className="categories">{categories.join(', ')}</span>
                  <div className="ms-auto"></div>
                </div>
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.replace(/<img(.*?)(width=\"1\")(.*?)>/, '')
                }}
              />
              <footer>
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
              </footer>
            </ArticlePostStyled>
          ))}{' '}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ercumentlacin'
  )
  const result = await data.json()
  return {
    paths: result?.items?.map(({ title }) => {
      return { params: { id: string_to_slug(title) } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await unfetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ercumentlacin'
  )
  const result = await data.json()
  return {
    props: {
      items: result.items.filter(
        (item) => string_to_slug(item.title) === params.id
      )
    }
  }
}

export default Post
