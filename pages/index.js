import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import unfetch from 'isomorphic-unfetch'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import string_to_slug from '../helpers/titleToSlug'

function Home({ items }) {
  // console.log(items)

  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="bg-primary">Hello, Next.js!</h1>
      <ul>
        {items?.map(({ title }) => {
          const url = string_to_slug(title)
          return (
            <li key={uuidv4()}>
              <Link href="/post/[id]" as={`/post/${url}`}>
                <a>{title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await unfetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ercumentlacin'
  )
  const result = await data.json()
  return {
    props: {
      items: result.items
    }
  }
}

export default Home
