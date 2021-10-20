import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const ModalContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  position: absolute;
  width: var(--layout-mobile);
  margin: 0;
  top: -15px;
  left: none;
  right: 0;
  background-color: transparent;

  @media only screen and (max-width: ${breakpointMovil}) {
    width: 100vw;
    top: 1rem;
    left: 7%;
  }
`;
