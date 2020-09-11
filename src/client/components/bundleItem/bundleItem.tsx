import React, { useState } from "react";
import Table from "rc-table";
import { deleteBundle } from "../../services";
import {
  Card,
  UpperPart,
  Package,
  PackageName,
  Bundle,
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
  bundle?: string;
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

  const columns = [
    {
      // title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      dataIndex: "bundle",
      key: "bundle",
      width: 200,
    },
    {
      dataIndex: "company",
      key: "company",
      width: 200,
    },
    {
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      dataIndex: "active",
      key: "active",
      width: 200,
    },
    {
      dataIndex: "category",
      key: "category",
      width: 200,
    },
  ];

  const data = [
    {
      name: bundlePackage.name,
      bundle: bundlePackage.bundle,
      company: bundlePackage.company,
      email: bundlePackage.email,
      active: bundlePackage.active,
      category: bundlePackage.category,
    },
  ];

  return (
    // <TableRow>
    //   <td>{bundlePackage.name}</td>
    //   <td>{bundlePackage.bundle}</td>
    //   <td>{bundlePackage.company}</td>
    //   <td>{bundlePackage.email}</td>
    //   <td>{bundlePackage.active}</td>
    //   <td>{bundlePackage.category}</td>
    //   <td>DELETE</td>
    // </TableRow>
    <Card>
      <UpperPart>
        <Package>
          <PackageName>{bundlePackage.name}</PackageName>
          <Bundle>{bundlePackage.bundle}</Bundle>
        </Package>
        <Company>
          <CompanyName>{bundlePackage.company}</CompanyName>
          <CompanyEmail>{bundlePackage.email}</CompanyEmail>
        </Company>
      </UpperPart>
      <Footer>
        <Active>Active O</Active>
        <Delete>Delete</Delete>
      </Footer>
    </Card>
  );
};
