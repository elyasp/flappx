import React, { useEffect, useState } from "react";
import { BundleItem } from "./components";
import { getBundles } from "./services";
import { BundleCard } from "./styles";

export interface IBundle {
  name: string;
  bundle: string;
  company: string;
  email: string;
  active: boolean;
  category: string;
}

export const App: React.FC<IAppProps> = () => {
  const [bundles, setBundles] = useState<IBundle[]>([]);

  useEffect(() => {
    getBundles().then(setBundles);
  }, []);

  console.log("AppState>>>>", bundles && bundles);

  return (
    <div>
      <h1>Hello Home App</h1>
      <BundleCard>
        {bundles.map((item) => {
          return <BundleItem bundlePackage={item} />;
        })}
      </BundleCard>
    </div>
  );
};

export interface IAppProps {}
