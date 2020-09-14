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
  margin: 11% auto;
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
  padding: 1em 0.7em;
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
  }
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 0.5em 1em;
  background-color: #ef003d;
  color: white;
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 1em;
  transition: 300ms;
  border-radius: 0.3em;

  &:hover {
    background-color: #a3002c;
    transition: 300ms;
  }
`;

export const CancelButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5em 1em;
  background-color: #1f1f1f;
  color: white;
  font-weight: 600;
  font-size: 1.1em;
  margin-left: 1em;
  margin-top: 1em;
  transition: 300ms;
  border-radius: 0.3em;

  &:hover {
    background-color: #000000;
    transition: 300ms;
  }
`;

export const ErrorMessage = styled.div`
  color: white;

  ul {
    padding-left: 1em;
  }

  h6 {
    margin: 0;
    color: #ff3636;
  }

  li {
    font-size: 0.7em;
  }
`;
