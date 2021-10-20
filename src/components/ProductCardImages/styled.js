import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const ContainerPrincipalImage = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  img {
    display: inline-block;
    width: 100%;
    height: auto;
    vertical-align: top;
    border-radius: 1rem;
  }

  @media only screen and (max-width: ${breakpointMovil}) {
    max-width: 100%;
    border-radius: 0;

    img {
      border-radius: 0;
      width: 100vw;
      height: 350px;
      object-fit: cover;
    }
  }
`;

export const ContainerSlidePrincipal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSlideLeft = styled.div`
  position: absolute;
  left: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--light-grayish-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: ${breakpointMovil}) {
    left: 25px;
  }
`;

export const ButtonSlideRight = styled.div`
  position: absolute;
  right: -25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--light-grayish-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: ${breakpointMovil}) {
    right: 25px;
  }
`;

export const ListThumbs = styled.ul`
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;

  @media only screen and (max-width: ${breakpointMovil}) {
    display: none;
  }
`;

export const ContainerThumb = styled.li`
  position: relative;
  width: 100%;
  border-radius: 1rem;
  cursor: pointer;

  ::before {
    content: "";
    display: ${(props) => (props.isActive ? "block" : "none")};
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--light-grayish-blue);
    opacity: 0.75;
    border: 3px solid var(--orange-primary);
    border-radius: 1rem;
  }

  img {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    border-radius: 1rem;
  }
`;
