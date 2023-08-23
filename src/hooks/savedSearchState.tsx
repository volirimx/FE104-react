import { useState } from 'react';

export const useSavedSearchState = () => {
  const [savedSearchValue, setSavedSearchValue] = useState("");

  return {
    savedSearchValue, 
    setSavedSearchValue,
  };
};
