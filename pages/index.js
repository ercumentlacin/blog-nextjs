import React from 'react'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
// components
import Layout from '../components/Layout'
import MainSection from '../components/MainSection'
import Movie from '../components/Movie'
import Author from '../components/Author'

function Home({ items, feed }) {
  // console.log(items)
  // console.log(feed)

  return (
    <Layout>
      <Head>
        <title>Ana Sayfa || Ercüment Laçın</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="row my-3">
        <div className="col-lg-3 ">
          {/* aside */}
          <Movie
            title="Casablanca"
            paragraph="Here’s looking at the wartime tale about doomed lovers as a film that checks off all the cinematic boxes. A rare feat for a story put to celluloid, the film draws out peak romantic sentiment and narrative tension in critical balance, threading resolution through the narrowest of dramatic needles. It truly is a work of art."
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-the-list-classic-movies-casablanca-gettyimages-2716404-1498059037.jpg?crop=1xw:1xh;center,top&resize=980:*"
            href="https://www.amazon.com/Casablanca-Humphrey-Bogart/dp/B001EBWING/ref=sr_1_1?ots=1&linkCode=ogi&tag=harpersbazaar_auto-append-20&ascsubtag=[artid|10056.g.10201500[src|[ch|[lt|"
          />
          <Movie
            title="The Third Man"
            paragraph="This British noir's zither-picked score is as on point as its central mystery: how did Harry Lime die? A hardboiled whodunit against a backdrop of a devastated Vienna, Carol Reed’s landmark postwar film unfolds as pulp writer Holly Martins wades through secrets to unearth what happened to his friend."
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-the-list-classic-movies-the-third-man-gettyimages-3095452-1498059047.jpg?crop=1xw:1xh;center,top&resize=980:*"
            href="https://www.amazon.com/dp/B002OSA3MQ?ots=1&linkCode=ogi&tag=harpersbazaar_auto-append-20&ascsubtag=[artid|10056.g.10201500[src|[ch|[lt|"
          />
        </div>

        {/* main  */}
        <MainSection items={items} />

        {/* aside */}
        <Author />
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
      items: result.items,
      feed: result.feed
    }
  }
}

export default Home
