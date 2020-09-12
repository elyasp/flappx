import React, { useEffect, useState } from "react";
import { BundleItem, Modal } from "../../components";
import { getBundles } from "../../services";
import { BundleContainer, ManagerWrap, Searchbar, AddButton } from "./styles";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getBundles().then(setBundles);
  }, []);

  return (
    <ManagerWrap>
      {/* <Modal /> */}

      {isOpen && <Modal closeModal={() => setIsOpen(false)}></Modal>}

      <AddButton onClick={() => setIsOpen(true)}>New Bundle</AddButton>
      <Searchbar
        type="text"
        placeholder="SEARCH"
        // onChange={(e) => setSearch(e.target.value)}
      />
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
