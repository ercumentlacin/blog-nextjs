import React from 'react'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
// components
import Layout from '../components/Layout'
import MainSection from '../components/MainSection'

function Home({ items }) {
  // console.log(items)

  return (
    <Layout>
      <Head>
        <title>Ana Sayfa || Ercüment Laçın</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="row my-3">
        <div className="col-md-3 border-top border-2">aside</div>
        <MainSection items={items} />
        <div className="col-md-3 border-top border-2">aside</div>
      </div>
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
