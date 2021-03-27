import styled from 'styled-components'

const MovieStyled = styled.div`
  h4 {
    font-size: clamp(1rem, 3vw, 1.1rem);
  }
  p {
    font-size: clamp(0.6rem, 2.5vw, 0.7rem);
    word-spacing: 0.1rem;
  }

  img {
    max-width: 7rem;
    min-width: 7rem;
    height: auto;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
  }
  .movie__text {
    padding-right: 0.3rem;
  }
`

export default MovieStyled
