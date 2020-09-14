import React from "react";
import { ErrorMessage } from "./styles";

export const InputError = (props) => {
  if (props.isHidden) {
    return null;
  }
  return (
    <ErrorMessage>
      <h6>That is not a valid android package name</h6>
      <ul>
        <li>Names must consist of at least two segments</li>
        <li>Separated by dots</li>
        <li>Segments must start with a letter</li>
        <li>Characters must be either alphanumeric or underscores</li>
      </ul>
    </ErrorMessage>
  );
};
