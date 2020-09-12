import React, { useState } from "react";
import { deleteBundle } from "../../services";
import {
  Card,
  UpperPart,
  Package,
  PackageName,
  Company,
  CompanyName,
  DeleteButton,
  CompanyEmail,
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
  const toggleDelete = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    const bundleToDelete = { bundle: e.target.value };

    deleteBundle(bundleToDelete)
      .then(() => {
        window.location.reload(true);
      })
      .catch((error) => {
        console.log("Could not add bundle", error);
      });
  };

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card>
      <Package>
        <PackageName>
          <h1>{bundlePackage.name}</h1>
          <p>{bundlePackage.bundle}</p>
        </PackageName>
      </Package>
      <Company>
        <CompanyName>
          <small>made by </small>
          {bundlePackage.company}
        </CompanyName>
        <CompanyEmail>{bundlePackage.email}</CompanyEmail>
        <DeleteButton value={bundlePackage.bundle} onClick={toggleDelete}>
          Delete
        </DeleteButton>
      </Company>
      <UpperPart></UpperPart>
      <Footer active={bundlePackage.active}>
        {bundlePackage.active ? <p>Active</p> : <p>Not active</p>}
      </Footer>
    </Card>
  );
};
