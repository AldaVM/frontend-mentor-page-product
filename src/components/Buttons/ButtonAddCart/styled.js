import styled from "styled-components";

export const Button = styled.div`
  position: relative;
  width: 67%;
  padding: 1rem 2rem;
  background-color: var(--orange-primary);
  color: var(--white);
  text-align: center;
  font-weight: 700;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 1px 12px var(--orange-primary);

  span {
    display: inline-block;
    padding: 0 1rem;
  }
`;

export const ContainerMessage = styled.span`
  position: absolute;
  bottom: -3rem;
  line-height: 1.5;
  color: tomato;
  font-size: 1rem;
  left: 0;
`;
