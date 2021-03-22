import styled from 'styled-components'

const HeaderStyled = styled.div`
  padding: 2rem 0;
  h1 {
    font-size: clamp(1.5rem, 2.5vw, 4rem);
    margin: 0;
  }
  .spans span {
    color: #6e6f74;
  }

  .cuff {
    border-top: 0.0625rem solid black;
    border-bottom: 0.0625rem solid black;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    .date {
      color: #6e6f74;

      span {
        position: relative;
        height: 0.083rem;
        width: 3rem;
        background-color: #6e6f74;
        display: inline-block;
        margin: 0.5rem;

        &::after {
          position: absolute;
          content: '';
          top: 0.25rem;
          left: 0;
          height: 0.083rem;
          width: 3rem;
          background-color: #6e6f74;
        }
      }
    }
  }
`

export default HeaderStyled
