import unfetch from 'isomorphic-unfetch'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import string_to_slug from '../../helpers/titleToSlug'

const Post = ({ items }) => {
  const router = useRouter()
  const { pid } = router.query
  console.log(items)
  return (
    <Layout>
      {items.map(({ title, categories }) => (
        <article key={uuidv4()}>
          <header>
            <h2>{title}</h2>
            <p>
              <strong>Kategoriler: </strong>
              {categories?.join(', ')}
            </p>
          </header>
        </article>
      ))}
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
