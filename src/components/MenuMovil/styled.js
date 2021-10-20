import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const NavContainerMovil = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;

  @media only screen and (max-width: ${breakpointMovil}) {
    left: ${(props) => (props.isShowMenu ? "0" : "-100%")};
  }
`;

export const NavMovil = styled.nav`
  width: 60%;
  height: 100%;
  background-color: var(--white);
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
`;

export const ItemNavMovil = styled.a`
  display: inline-block;
  padding: 1em 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--black);
`;

export const BtnMenuClose = styled.div`
  padding: 1rem 0rem 2rem 0;
  cursor: pointer;
`;
