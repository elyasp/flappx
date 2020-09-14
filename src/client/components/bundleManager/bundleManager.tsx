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

export const BundleManager = () => {
  const [bundles, setBundles] = useState<IBundle[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [search, setSearch] = useState("");
  // const [searchedBundles, setSearchedBundles] = useState<IBundle[]>([]);

  useEffect(() => {
    getBundles()
      .then(setBundles)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // BUG on implementing search function, filter not working properly
  // - correctly receives json object
  // - properly iterates value in Chrome devtools
  // - returns empty array

  // useEffect(() => {
  //   setSearchedBundles(
  //     bundles &&
  //       bundles.filter((item) => {
  //         item.name.toLowerCase().includes(search.toLowerCase());
  //       })
  //   );
  // }, [bundles, search]);
  console.log(">>>", bundles);
  return (
    <>
      {isOpen && <Modal closeModal={() => setIsOpen(false)}></Modal>}
      {bundles.length !== 0 ? (
        <ManagerWrap>
          <AddButton onClick={() => setIsOpen(true)}>New Bundle</AddButton>
          {/* <Searchbar
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          /> */}
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
