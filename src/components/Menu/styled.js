import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const Nav = styled.nav`
  width: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0 2em;

  @media only screen and (max-width: ${breakpointMovil}) {
    display: none;
  }
`;

export const ItemNav = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--dark-grayish-blue);
  padding: 0em 1em 3em 1em;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom: 3px solid var(--orange-primary);
    color: var(--very-vark-blue);
  }
`;
