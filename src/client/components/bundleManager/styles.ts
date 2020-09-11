import styled from "styled-components";

export const TableWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  table {
    padding: 2em;
    border: solid 3px red;
    border-collapse: collapse;

    thead {
      min-height: 2em;
      text-align: left;
      background-color: #4caf50;
      background-color: black;
      color: white;
    }
  }
`;

export const ManagerWrap = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const BundleContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  /* overflow-y: auto; */
`;
