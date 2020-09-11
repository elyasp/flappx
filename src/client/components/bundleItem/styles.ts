import styled from "styled-components";
import { media } from "../../styles/media";

export const Card = styled.div`
  min-width: 400px;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;
  border: solid 3px red;
  margin: 1em;

  ${media.md(`
  min-width: 70vw;
  `)}
`;

export const UpperPart = styled.div`
  min-height: 5em;
  display: flex;
  justify-content: space-between;
`;
export const Package = styled.div`
  background-color: #2a265f;
  color: #fff;
  padding: 30px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* min-width: 60%; */
`;
export const Company = styled.div`
  padding: 30px;
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PackageName = styled.div``;
export const Bundle = styled.div``;
export const CompanyName = styled.div``;
export const CompanyEmail = styled.div``;
export const Footer = styled.div`
  padding: 0 1em;
  background-color: pink;
  min-height: 30px;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Active = styled.div``;
export const Delete = styled.div``;
