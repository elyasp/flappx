import styled, { css } from "styled-components";
import { media, TappxGradient, LayeredBoxShadow } from "../../styles";

interface IActiveFooterProps {
  active: boolean;
}

export const Card = styled.div`
  height: fit-content;
  max-width: fit-content;
  border-radius: 1em;
  margin: 0 1em 2em;
  border-radius: 1em;
  overflow: hidden;
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  ${LayeredBoxShadow}

  ${media.md(`
      font-size: 2vw;
  `)}
`;

export const Package = styled.div`
  grid-column: 1 / 2;
  ${TappxGradient}
  color: #fff;
  padding: 1.5em;
  width: 250px;
  position: relative;
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
  padding: 1em;
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

export const Footer = styled.div<IActiveFooterProps>`
  background-color: ${({ active }) => (active ? "#33a349" : "#4a4a4a")};
  min-height: 1em;
  width: -webkit-fill-available;
  grid-column: 1 / 4;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0.1em;
    color: white;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
`;

export const DeleteButton = styled.button`
  border-radius: 5px;
  font-size: 0.8em;
  font-weight: 700;
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

export const CategoryLabel = styled.div`
  padding: 0 0.5em;
  border: none;
  border-radius: 1em;
  background-color: #1f383f;
  position: absolute;
  color: rgba(250, 0, 67, 1);
  bottom: 1em;

  ${media.md(`
    right: 1em;
  `)}
`;
