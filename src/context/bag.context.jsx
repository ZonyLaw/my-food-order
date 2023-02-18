import { createContext, useState } from "react";

const addBagItem = (bagItems, itemToAdd) => {
  //find if batItems contain itemToAdd
  const existingBagItem = bagItems.find(
    (bagItem) => bagItem.id === itemToAdd.id
  );
  //if found, increment quantity
  if (existingBagItem) {
    return bagItems.map((bagItem) =>
      bagItem.id === itemToAdd.id
        ? { ...bagItem, quantity: bagItem.quantity + 1 }
        : bagItem
    );
  }
  //return new array with modified array bagItems / new bag item
  return [...bagItems, { ...itemToAdd, quantity: 1 }];
};

export const BagContext = createContext({
  isBagOpen: false,
  setIsBagOpen: () => {},
  bagItems: [],
  addItemToBag: () => {},
});

export const BagProvider = ({ children }) => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);

  const addItemToBag = (itemToAdd) => {
    setBagItems(addBagItem(bagItems, itemToAdd));
  };

  const value = { isBagOpen, setIsBagOpen, addItemToBag, bagItems };

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
};