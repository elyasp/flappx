import styled from "styled-components";
import { media } from "../../styles/media";

export const Header = styled.nav`
  height: fit-content;
  background-color: #ef003d;
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  div {
    min-width: 500px;
    padding-top: 1em;

    ${media.lg(`
  min-width: 200px;
  `)}
  }

  h3 {
    color: white;
    font-weight: 400;
    font-style: italic;
    font-size: 2em;

    ${media.lg(`
      font-size: 1em;
  `)}
  }
`;
