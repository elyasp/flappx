import React from "react";
import { BundleManager, Header, FooterComponent } from "./components";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <BundleManager />
      <FooterComponent />
    </>
  );
};
