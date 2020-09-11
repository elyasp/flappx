import styled from "styled-components";
import { media, TappxGradient } from "../../styles";

export const Header = styled.nav`
  ${TappxGradient}
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  div {
    min-width: 30vw;
    margin-top: 1em;
  }

  h3 {
    color: white;
    font-weight: 400;
    font-style: italic;
    font-size: 2em;

    ${media.md(`
      font-size: 0.8em;
  `)}
  }
`;
