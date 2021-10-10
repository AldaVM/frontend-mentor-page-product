import styled from "styled-components";

export const ContainerCart = styled.div`
  max-width: var(--layout-mobile);
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 5px 8px 14px -6px rgba(0, 0, 0, 0.75);
  background-color: var(--white);
`;

export const TitleCart = styled.h3`
  font-weight: 700;
  padding: 2rem 1.5rem;
  color: var(--very-vark-blue);
`;

export const ListProductsCart = styled.ul`
  border-top: 1px solid var(--grayish-blue);
`;

export const ContainerBtn = styled.div`
  padding: 1rem 1.5rem 2rem 1.5rem;
`;

export const MessageEmpty = styled.div`
  padding: 5rem 1.5rem;
  text-align: center;
  border-top: 1px solid var(--grayish-blue);
  color: var(--dark-grayish-blue);
  font-weight: 700;
`;
