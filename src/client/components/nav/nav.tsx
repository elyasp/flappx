import React from "react";
import { Header } from "./styles";
import Tappx from "../../images/tappx-logo.svg";

export const Nav = () => {
  return (
    <Header>
      <div>
        <Tappx />
      </div>
      <h3>Interactive Bundle Manager</h3>
    </Header>
  );
};
