import styled from "styled-components";
import { breakpointMovil } from "../../../constants";

export const ContainerImageAvatar = styled.div`
  width: 65px;
  height: 65px;
  border: 3px solid transparent;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    border: 3px solid var(--orange-primary);
  }

  @media only screen and (max-width: ${breakpointMovil}) {
    width: 40px;
    height: 40px;
  }

  img {
    width: 100%;
    vertical-align: top;
  }
`;
