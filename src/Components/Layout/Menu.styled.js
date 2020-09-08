import styled from 'styled-components';

export const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 0;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  display: ${({open})=> open ? 'flex':'none'};
  transition: transform 0.3s ease-in-out;
  font-family: 'Permanent Marker', cursive;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.PrimaryHover};
    }
  }
`;