import { createContext, useState, useEffect } from "react";

const addBagItem = (bagItems, itemToAdd) => {
  //find if batItems contain itemToAdd
  const existingBagItem = bagItems.find((bagItem) => {
    if (
      bagItem.id === itemToAdd.id &&
      bagItem.restaurant === itemToAdd.restaurant
    ) {
      return true;
    } else {
      return false;
    }
  });
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

const minusBagItem = (bagItems, itemToMinus) => {
  const existingBagItem = bagItems.find((bagItem) => bagItem === itemToMinus);

  if (existingBagItem.quantity === 1) {
    return bagItems.filter((bagItem) => bagItem !== itemToMinus);
  }

  return bagItems.map((bagItem) =>
    bagItem.id === itemToMinus.id
      ? { ...bagItem, quantity: bagItem.quantity - 1 }
      : bagItem
  );
};

const removeBagItem = (bagItems, itemToRemove) => {
  return bagItems.filter((bagItem) => bagItem.id !== itemToRemove.id);
};

//initialise the variable or function
export const BagContext = createContext({
  isBagOpen: false,
  bagItems: [],
  bagTotal: 0,
  setIsBagOpen: () => {},
  addItemToBag: () => {},
  minusItemToBag: () => {},
  removeItemInBag: () => {},
});

export const BagProvider = ({ children }) => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [bagTotal, setBagTotal] = useState(0);

  const addItemToBag = (itemToAdd) => {
    setBagItems(addBagItem(bagItems, itemToAdd));
  };

  const minusItemToBag = (itemToMinus) => {
    setBagItems(minusBagItem(bagItems, itemToMinus));
  };

  const removeItemInBag = (itemToRemove) => {
    setBagItems(removeBagItem(bagItems, itemToRemove));
  };

  useEffect(() => {
    const newBagTotal = bagItems.reduce(
      (total, bagItem) => total + bagItem.quantity * bagItem.price,
      0
    );
    setBagTotal(newBagTotal);
  }, [bagItems]);

  const value = {
    isBagOpen,
    bagItems,
    bagTotal,
    setIsBagOpen,
    addItemToBag,
    minusItemToBag,
    removeItemInBag,
  };

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
};
