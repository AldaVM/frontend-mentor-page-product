import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  position: absolute;
  width: var(--layout-mobile);
  top: -15px;
  right: 0;
  background-color: transparent;
`;
