import React from "react";
import { HeaderWrap } from "./styles";
import Tappx from "../../images/tappx-logo.svg";

export const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <Tappx />
      </div>
      <h3>Interactive Bundle Manager</h3>
    </HeaderWrap>
  );
};
