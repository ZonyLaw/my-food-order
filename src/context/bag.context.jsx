import { createContext, useState } from "react";

export const BagContext = createContext({
  isBagOpen: false,
  setIsBagOpen: () => {},
});

export const BagProvider = ({ children }) => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const value = { isBagOpen, setIsBagOpen };

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
};
