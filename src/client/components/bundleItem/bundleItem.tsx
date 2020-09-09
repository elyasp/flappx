import React from "react";

export interface IBundle {
  name: string;
  bundle: string;
  company: string;
  email: string;
  active: boolean;
  category: string;
}

export interface IProps {
  bundlePackage: IBundle;
}

export const BundleItem: React.FC<IProps> = ({ bundlePackage }) => {
  console.log("pppppp", bundlePackage);
  return (
    <div>
      <h5>component intro</h5>
      <h2>{bundlePackage.name}</h2>
      <h2>{bundlePackage.bundle}</h2>
      <h2>{bundlePackage.company}</h2>
      <h2>{bundlePackage.email}</h2>
      <h2>{bundlePackage.active}</h2>
      <h2>{bundlePackage.category}</h2>
    </div>
  );
};
