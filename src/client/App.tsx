import React from "react";
import { BundleManager, Nav } from "./components";

export const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <BundleManager />
    </div>
  );
};
