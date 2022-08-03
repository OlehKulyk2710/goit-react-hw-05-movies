import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 3px solid gray;
`;

export const LinkWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 5px;
  font-weight: 600;
  font-size: 18px;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transform: scale(1);

  :not(:last-child) {
    margin-right: 25px;
  }

  :hover,
  :focus {
    transform: scale(1.05);
  }

  &.active {
    text-decoration: underline;
    background-color: tomato;
    color: white;
    transform: scale(1.05);
  }
`;
