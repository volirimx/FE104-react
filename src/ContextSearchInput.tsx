import { createContext } from "react";

const ContextSearchInput = createContext({
  searchInput: "",
  setSearchInput: (newValue: string) => {},
});

export default ContextSearchInput;
