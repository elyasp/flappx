import styled from "styled-components";
import { media, TappxGradient, LayeredBoxShadow } from "../../styles";

export const ManagerWrap = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: #545454;
`;

export const BundleContainer = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  overflow-y: auto;
`;

export const Searchbar = styled.input`
  outline: none;
  width: 35vw;
  font-size: 1em;
  height: 2em;
  margin: 1em;
  padding: 0 1em;
  border: solid 2px rgb(250, 0, 67);
  border-radius: 50px;

  ${media.xl(`
    width: 70vw;;
  `)}
`;

export const ModalButton = styled.button`
  color: white;
  outline: none;
  border: none;
  padding: 0.5em;
  ${TappxGradient}
  ${LayeredBoxShadow}
`;
