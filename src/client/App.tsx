import React from "react";
import { BundleManager, Nav, FooterComponent } from "./components";

export const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <BundleManager />
      <FooterComponent />
    </div>
  );
};
