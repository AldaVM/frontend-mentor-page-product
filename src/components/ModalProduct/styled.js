import styled from "styled-components";

export const ModalAllDisplay = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
`;
