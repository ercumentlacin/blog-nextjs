import styled from 'styled-components'

const ArticlePostStyled = styled.article`
  padding: 2rem 0;
  img {
    max-width: 474px !important;
    margin: 0 auto !important;
    filter: grayscale(100%);
  }

  a + * {
    margin-top: 1rem;
  }

  p {
    color: #6f7074;
    margin: 1rem 0;

    strong {
      color: black;
    }
  }

  a {
    display: block;
  }

  h2 {
    text-transform: capitalize;
  }

  .categories {
    color: #a1a1a5;
    text-transform: uppercase;
  }

  .fa-directions {
    background-color: #f9a7d1;
    padding: 0.2rem;
    border-radius: 50%;
    border: 1px solid;
    cursor: pointer;
    margin-left: 0.5rem;
    color: black;
  }
`
export default ArticlePostStyled
