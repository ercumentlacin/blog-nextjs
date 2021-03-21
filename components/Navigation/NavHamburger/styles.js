import styled from 'styled-components'

const StyledHamburgerButton = styled.button`
  border: 0;

  &:focus {
    border: 0;
    box-shadow: none;
  }

  .navbar-toggler-icon,
  .navbar-toggler-icon::after,
  .navbar-toggler-icon::before {
    background-color: ${({ theme }) => theme.colors.heading};
    border-radius: 0.1rem;
    height: 0.3rem;
  }
  .navbar-toggler-icon {
    background-image: none;
    position: relative;
    width: 1.5625rem;
    padding-right: 0.3125rem;

    &::after {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: 0;
      width: 1.875rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0.5rem;
      left: 0;
      width: 1.25rem;
    }
  }
`

export default StyledHamburgerButton
