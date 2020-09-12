import styled, { css } from "styled-components";
import { media, TappxGradient, LayeredBoxShadow } from "../../styles";

interface IActiveFooterProps {
  active: boolean;
}

export const Card = styled.div`
  height: fit-content;
  max-width: fit-content;
  border-radius: 20px;
  margin-bottom: 3em;
  overflow: hidden;
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  ${LayeredBoxShadow}

  ${media.md(`
      font-size: 2vw;
  `)}
`;

export const UpperPart = styled.div`
  /* min-height: 5em; */
`;

export const Package = styled.div`
  grid-column: 1 / 2;
  ${TappxGradient}
  color: #fff;
  padding: 30px;
  width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.md(`
      width: 30vw;
      height: 38px;
  `)}
`;

export const Company = styled.div`
  background-color: #1f383f;
  color: white;
  padding: 30px;
  grid-column: 2 / 3;
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.md(`
  width: 20vw;
  `)}
`;

export const PackageName = styled.div`
  p {
    text-decoration-line: overline;
    font-size: 1.3em;
  }

  h1 {
    ${media.md(`
      font-size: 4vw;
  `)}
  }
`;

export const CompanyName = styled.div``;
export const CompanyEmail = styled.div``;

export const Footer = styled.div<IActiveFooterProps>`
  p {
    margin: 0.1em;
    color: white;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  background-color: ${({ active }) => (active ? "#33a349" : "#4a4a4a")};
  min-height: 1em;
  width: -webkit-fill-available;
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Active = styled.div``;
export const DeleteButton = styled.button`
  border-radius: 5px;
  font-size: 1em;
  position: absolute;
  bottom: -1em;
  right: 1em;
  color: white;
  outline: none;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  ${TappxGradient}
  ${LayeredBoxShadow}
`;
