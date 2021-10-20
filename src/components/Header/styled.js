import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const HeaderTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: var(--layout-desktop);
  border-bottom: 1px solid var(--grayish-blue);
  padding-top: 3em;
`;

export const ItemHeader = styled.div`
  display: flex;
  position: relative;
  top: 0;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: ${breakpointMovil}) {
    padding: 1rem;
    top: -50%;
  }
`;

export const ContainerButtonsHeader = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  right: 0;
`;
