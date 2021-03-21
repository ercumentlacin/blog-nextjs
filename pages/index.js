import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="bg-primary">Hello, Next.js!</h1>
    </Layout>
  )
}

export default Home
