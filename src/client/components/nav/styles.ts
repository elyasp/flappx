import styled from "styled-components";
import { media } from "../../styles";

export const Header = styled.nav`
  background-color: #333333;
  padding: 1em 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid 1em #fa0043;

  ${media.xxl(`
    flex-direction: column; 
  `)}

  div {
    margin-top: 1em;
    width: fit-content;

    svg {
      height: 5em;
    }
  }

  h3 {
    color: white;
    font-weight: 400;
    font-size: 2em;

    ${media.md(`
      font-size: 0.8em;
  `)}
  }
`;
