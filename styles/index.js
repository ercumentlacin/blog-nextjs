import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    
  }
  img {
    width: 100%;
  }

  p {
    font-family: 'Rubik', sans-serif;
    font-size: clamp(.8rem, 2.5vw, 1rem);
  }

  h1, h2,h3, h4 {
    font-family: 'Rubik', sans-serif;
  }
  
`
export const theme = {
  colors: {
    primary: '#FFFFFF',
    text: '#6E6F73',
    heading: '#131314',
    'dark-heading': '#020202',
    pink: '#FFFFFF',
    'dark-pink': '#F9B1D6',
    blue: '#CBEAFE'
  }
}
