import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const ContainerCard = styled.div`
  width: 100%;
  max-width: var(--layout-desktop);
  padding: 6rem 4rem 6rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${breakpointMovil}) {
    flex-direction: column;
    padding: 0 0 6rem 0;
  }
`;
