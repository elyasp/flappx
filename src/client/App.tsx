import React from "react";
import { BundleManager, Nav, FooterComponent } from "./components";
import { AppContainer } from "./styles";

export const App: React.FC = () => {
  return (
    <>
      <AppContainer>
        <Nav />
        <BundleManager />
        <FooterComponent />
      </AppContainer>
    </>
  );
};
