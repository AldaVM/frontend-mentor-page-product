import styled from "styled-components";
import { breakpointMovil } from "../../../constants";

export const ButtonContainer = styled.div`
  display: none;
  padding-right: 1rem;
  position: relative;
  top: 4px;
  cursor: pointer;

  @media only screen and (max-width: ${breakpointMovil}) {
    display: block;
  }
`;
