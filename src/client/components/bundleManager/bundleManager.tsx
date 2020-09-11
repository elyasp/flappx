import React, { useEffect, useState } from "react";
import { BundleItem } from "../bundleItem";
import { Modal } from "../modal";
import { getBundles } from "../../services";
import { BundleContainer, ManagerWrap } from "./styles";

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
    <ManagerWrap>
      {/* <Modal /> */}
      <button>Add Bundle</button>
      <BundleContainer>
        {bundles.map((item) => {
          return <BundleItem key={item.bundle} bundlePackage={item} />;
        })}
      </BundleContainer>

      {/* <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bundle</th>
              <th>Company</th>
              <th>Email</th>
              <th>Active</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bundles.map((item) => {
              return <BundleItem key={item.bundle} bundlePackage={item} />;
            })}
          </tbody>
        </table>
      </TableWrap> */}
    </ManagerWrap>
  );
};
