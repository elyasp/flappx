import styled from "styled-components";
import { TappxGradient } from "../../styles";

export const Footer = styled.footer`
  display: grid;
  place-items: center;
  height: 10vh;
  color: white;
  ${TappxGradient}

  a {
    text-decoration-line: none;
    font-weight: 700;
    color: #bfc5ff;
  }
`;
