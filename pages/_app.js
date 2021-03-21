import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles/'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
