import React, { useState } from "react";
import { deleteBundle } from "../../services";

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

interface IDelete {
  bundle: string;
}

export const BundleItem: React.FC<IProps> = ({ bundlePackage }) => {
  const [bundleDelete, setBundleDelete] = useState<IDelete>();
  const handleDelete = (e) => {
    e.preventDefault();

    deleteBundle(bundleDelete).catch((error) => {
      console.log("Could not add bundle", error);
    });
  };

  const toggleDelete = (e) => {
    e.preventDefault();
    setBundleDelete({ [e.target.name]: e.target.value });
  };

  console.log(bundleDelete);

  return (
    <div>
      <h5>component intro</h5>
      <h2>{bundlePackage.name}</h2>
      <h2>{bundlePackage.bundle}</h2>
      <h2>{bundlePackage.company}</h2>
      <h2>{bundlePackage.email}</h2>
      <h2>{bundlePackage.active}</h2>
      <h2>{bundlePackage.category}</h2>
      <form onSubmit={handleDelete}>
        <input
          name="bundle"
          type="checkbox"
          value={bundlePackage.bundle}
          onChange={toggleDelete}
        />
        <button type="submit" />
      </form>
    </div>
  );
};
