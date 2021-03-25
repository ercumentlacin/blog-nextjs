import Head from 'next/head'
import React from 'react'
import Container from '../Container'
import Header from '../Header'
import Navigation from '../Navigation/'
import LayoutStyle from './styles'

function Layout({ children }) {
  return (
    <Container>
      <LayoutStyle>
        <Head>
          <title>Ercüment Laçın</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Header />
        <Navigation />
        <main>{children}</main>
        <footer>design by ercumentlacin</footer>
      </LayoutStyle>
    </Container>
  )
}

export default Layout
