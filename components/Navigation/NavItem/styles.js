import styled from 'styled-components'

const StyledNavItem = styled.li`
  a {
    font-family: 'PT Sans Narrow', sans-serif;
    color: ${({ theme }) => theme.colors.text} !important;
    text-transform: uppercase;
    font-weight: 700;

    &:hover,
    &:focus {
      transition: 250ms ease-in-out;
      color: ${({ theme }) => theme.colors.heading} !important;
    }
  }
  a.nav-link.active {
    transition: 250ms ease-in-out;
    color: ${({ theme }) => theme.colors.heading} !important;
  }
`

export default StyledNavItem
