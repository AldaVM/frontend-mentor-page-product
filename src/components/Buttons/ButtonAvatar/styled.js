import styled from "styled-components";

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

  img {
    width: 100%;
    vertical-align: top;
  }
`;
