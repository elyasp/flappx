import styled from "styled-components";
import { media } from "../../styles";

export const ModalContainer = styled.div`
  position: fixed;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 15% auto;
  background-color: #ef003d;
  border-radius: 10px;
  width: 40vw;
  padding: 1em;

  ${media.xl(`
  width: 80vw;
  `)}
`;

export const Form = styled.form`
  margin: 0;
  border-radius: 10px;
  color: white;
  padding: 2em 0.5em;
  background-color: #1f383f;

  div {
    display: flex;
    flex-direction: column;
    margin: 0.6rem 0.5em;

    input,
    select {
      color: black;
      border: none;
      outline: none;
      padding: 0.25rem;
    }

    small {
      color: #b1c0c4;
    }
  }

  span {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 0.5em;
  background-color: #ef003d;
  color: white;
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5em;
  background-color: #0a0a0a;
  color: white;
  font-weight: 600;
  font-size: 1.1em;
  margin-left: 1em;
`;
