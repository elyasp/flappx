import React, { useEffect, useState } from "react";
import { BundleItem, Modal } from "../../components";
import { getBundles } from "../../services";
import {
  BundleContainer,
  ManagerWrap,
  Searchbar,
  AddButton,
  NoBundles,
} from "./styles";

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
  const [bundles, setBundles] = useState<IBundle[]>();
  const [isOpen, setIsOpen] = useState(false);

  console.log(bundles);

  useEffect(() => {
    getBundles()
      .then(setBundles)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isOpen && <Modal closeModal={() => setIsOpen(false)}></Modal>}
      {bundles ? (
        <ManagerWrap>
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
        </ManagerWrap>
      ) : (
        <NoBundles>
          <AddButton onClick={() => setIsOpen(true)}>
            Add a new Bundle
          </AddButton>
        </NoBundles>
      )}
    </>
  );
};
