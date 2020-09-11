import React from "react";
import { Header } from "./styles";
import Tappx from "react-svg-loader!./tappx-logo.svg";

export const Nav = () => {
  return (
    <Header>
      <div>
        <Tappx />
      </div>
      <h3>Bundle Manager made by Elyas</h3>
    </Header>
  );
};
