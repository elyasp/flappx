import styled from "styled-components";
import { media, TappxGradient, LayeredBoxShadow } from "../../styles";

export const ManagerWrap = styled.div`
  min-height: calc(100vh - 5vh);
  padding-top: 1em;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const AddButton = styled.button`
  color: white;
  outline: none;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  ${TappxGradient}
  ${LayeredBoxShadow}
`;

export const BundleContainer = styled.div`
  width: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

export const Searchbar = styled.input`
  outline: none;
  width: 35vw;
  font-size: 1em;
  height: 2em;
  margin: 2em;
  padding: 0 1em;
  border: solid 2px rgb(250, 0, 67);
  border-radius: 50px;

  ${media.xl(`
    width: 70vw;;
  `)}
`;

export const NoBundles = styled.div`
  margin-top: 5em;
  display: grid;
  place-items: center;
`;
