import React, { useState } from "react";
import { deleteBundle } from "../../services";
import {
  Card,
  UpperPart,
  Package,
  PackageName,
  Company,
  CompanyName,
  Active,
  Delete,
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

interface IDelete {
  bundle: string;
}

export const BundleItem: React.FC<IProps> = ({ bundlePackage }) => {
  const [bundleDelete, setBundleDelete] = useState<IDelete>();

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    deleteBundle(bundleDelete).catch((error) => {
      console.log("Could not add bundle", error);
    });
  };

  const toggleDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBundleDelete({ ...bundleDelete, [e.target.name]: e.target.value });
  };

  console.log("STATE??>", bundleDelete);

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
      </Company>
      <UpperPart></UpperPart>
      <Footer>
        <Active>Active O</Active>
        <Delete>Delete</Delete>
      </Footer>
    </Card>
  );
};
