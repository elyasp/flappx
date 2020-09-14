import React, { useState } from "react";
import { deleteBundle } from "../../services";
import {
  Card,
  Package,
  PackageName,
  CategoryLabel,
  Company,
  DeleteButton,
  Footer,
} from "./styles";

interface IBundle {
  name: string;
  bundle: string;
  company: string;
  email: string;
  active: boolean;
  category: string;
}

interface IProps {
  bundlePackage: IBundle;
}

export const BundleItem: React.FC<IProps> = ({ bundlePackage }) => {
  const handleDelete = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    const bundleToDelete = { bundle: e.target.value };
    deleteBundle(bundleToDelete)
      .then(() => {
        window.location.reload(true);
      })
      .catch((error) => {
        console.log("Connection Error", error);
        throw new Error();
      });
  };

  return (
    <Card>
      <Package>
        <PackageName>
          <h1>{bundlePackage.name}</h1>
          <p>{bundlePackage.bundle}</p>
        </PackageName>
        <CategoryLabel>{bundlePackage.category}</CategoryLabel>
      </Package>
      <Company>
        <div>
          <small>made by </small>
          {bundlePackage.company}
        </div>
        <div>{bundlePackage.email}</div>
        <DeleteButton value={bundlePackage.bundle} onClick={handleDelete}>
          <small>DELETE</small>
        </DeleteButton>
      </Company>
      <Footer active={bundlePackage.active}>
        {bundlePackage.active ? <p>Active</p> : <p>Not active</p>}
      </Footer>
    </Card>
  );
};
