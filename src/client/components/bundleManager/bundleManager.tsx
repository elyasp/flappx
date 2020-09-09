import React, { useEffect, useState } from "react";
import { BundleItem } from "../bundleItem";
import { Modal } from "../modal";
import { getBundles } from "../../services";

export interface IBundle {
  name: string;
  bundle: string;
  company: string;
  email: string;
  active: boolean;
  category: string;
}

export interface IAppProps {}

export const BundleManager = () => {
  const [bundles, setBundles] = useState<IBundle[]>([]);

  useEffect(() => {
    getBundles().then(setBundles);
  }, []);

  return (
    <div>
      <Modal />
      {bundles.map((item) => {
        return <BundleItem key={item.bundle} bundlePackage={item} />;
      })}
    </div>
  );
};
