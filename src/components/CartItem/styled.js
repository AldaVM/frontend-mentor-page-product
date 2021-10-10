import styled from "styled-components";

export const ImageCart = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 0.3em;
  }
`;

export const ContainerItemCart = styled.li`
  padding: 1rem 1.5rem 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--grayish-blue);

  h3 {
    padding-bottom: 0.5em;
  }

  em {
    color: var(--very-vark-blue);
  }
`;
