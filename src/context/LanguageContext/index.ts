import React, { useContext, useState } from "react";

type AvailableLanguages = "en" | "de" | "es";

type LanguageContextValueType = {
  language: AvailableLanguages;
  changeLanguage: (language: AvailableLanguages) => void;
};

const defaultLanguageContextValue: LanguageContextValueType = {
  language: "en",
  changeLanguage: () => {},
};

export const useInitLanguageContext = () => {
  const [language, setLanguage] = useState<AvailableLanguages>("en");
  return {
    language: language,
    changeLanguage: setLanguage,
  };
};

export const LanguageContext = React.createContext<LanguageContextValueType>(
  defaultLanguageContextValue
);

export const useLanguageContext = () => {
  const useLangContext = useContext(LanguageContext);
  return useLangContext;
};
