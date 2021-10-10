import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 0 2em;
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
