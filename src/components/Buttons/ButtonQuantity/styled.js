import styled from "styled-components";

export const ButtonConteinerQuantity = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--light-grayish-blue);
  padding: 1px;
  border-radius: 0.5rem;
`;

export const LabelQuantity = styled.span`
  display: inline-block;
  background-color: var(--light-grayish-blue);
  padding: 1em 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
`;

export const ButtonMinus = styled.span`
  display: inline-block;
  background-color: var(--light-grayish-blue);
  padding: 1em;
  font-size: 1rem;
  font-weight: 700;
  color: var(--orange-primary);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ButtonPlus = styled.span`
  display: inline-block;
  background-color: var(--light-grayish-blue);
  padding: 1em;
  font-size: 1rem;
  font-weight: 700;
  color: var(--orange-primary);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ContainerMessage = styled.span`
  position: absolute;
  bottom: -3rem;
  color: tomato;
  line-height: 1.5;
  font-size: 1rem;
  left: 0;
`;
