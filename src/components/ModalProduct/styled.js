import styled from "styled-components";

export const ModalAllDisplay = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
