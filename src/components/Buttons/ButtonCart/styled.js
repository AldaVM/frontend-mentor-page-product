import styled from "styled-components";

export const ContainerButtonCart = styled.div`
  position: relative;
  padding: 0 2rem;
  cursor: pointer;

  :hover {
    color: var(--orange-primary);
  }

  span {
    position: absolute;
    top: -8px;
    left: 2.5rem;
    display: inline-block;
    background-color: var(--orange-primary);
    color: var(--white);
    font-size: 8px;
    font-weight: 700;
    padding: 0.5em 1em;
    border-radius: .5rem;
  }
`;
