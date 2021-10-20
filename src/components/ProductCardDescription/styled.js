import styled from "styled-components";
import { breakpointMovil } from "../../constants";

export const ContainerDescriptionCard = styled.section`
  width: 43%;
  padding: 0 1rem;

  @media only screen and (max-width: ${breakpointMovil}) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const ContainerButtonsCard = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: ${breakpointMovil}) {
    flex-direction: column;
  }
`;

export const TitleCard = styled.h1`
  color: var(--black);
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 2rem;
`;

export const SubTitleCard = styled.h2`
  color: var(--orange-primary);
  font-size: 1rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

export const DescriptionCard = styled.p`
  color: var(--dark-grayish-blue);
  font-size: 1rem;
  line-height: 1.5;
  padding-bottom: 2rem;
`;

export const LabelPrice = styled.span`
  display: inline-block;
  color: var(--black);
  font-size: 2rem;
  font-weight: 700;
  padding-right: 1rem;
  vertical-align: middle;
`;

export const LabelDiscount = styled.span`
  display: inline-block;
  color: var(--orange-primary);
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3em;
  border-radius: 5px;
  background-color: var(--pale-orange-second);
`;

export const LabelOriginalPrice = styled.span`
  position: relative;
  display: block;
  color: var(--grayish-blue);
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1rem;

  ::after {
    width: 68px;
    display: block;
    content: "";
    border: 1px solid var(--grayish-blue);
    position: absolute;
    top: 50%;
  }

  @media only screen and (max-width: ${breakpointMovil}) {
    display: inline-block;
    padding-left: 9rem;
  }
`;
