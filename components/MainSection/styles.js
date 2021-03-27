import styled from 'styled-components'

const ArticleStyled = styled.article`
  img {
    max-width: 474px !important;
    margin: 0 auto !important;
    filter: grayscale(100%);
  }
  div > figure {
    display: none;
    background: red;
  }

  a {
    display: block;
    text-decoration: none;
    color: black;
    transition: all 750s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
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
export default ArticleStyled
