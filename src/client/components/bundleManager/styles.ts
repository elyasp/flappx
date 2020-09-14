import styled from "styled-components";
import { media, LayeredBoxShadow } from "../../styles";

export const ManagerWrap = styled.div`
  min-height: calc(100vh - 5vh);
  padding-top: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;

export const AddButton = styled.button`
  min-width: 129px;
  background-color: #1e282c;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 16px;
  color: white;
  outline: none;
  border: none;
  padding: 0.5em;
  margin: 1em 0 2em;
  cursor: pointer;
  ${LayeredBoxShadow}
  transition: 300ms;

  &:hover {
    transform: scale(1.2, 1.2);
    transition: 300ms;
  }
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
  min-height: calc(100vh - 31.5vh);
  color: black;
  margin-top: 5em;
  display: grid;
  place-items: center;
`;
