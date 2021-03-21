import Head from 'next/head'
import React from 'react'
import Navigation from '../Navigation'
import LayoutStyle from './styles'

function Layout({ children }) {
  return (
    <LayoutStyle>
      <Head>
        <title>Ercüment Laçın</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>design by ercumentlacin</footer>
    </LayoutStyle>
  )
}

export default Layout
