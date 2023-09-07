import { ChangeEvent, SetStateAction } from "react";

export const generateInputChangeHandler =
  (stateSetter: React.Dispatch<SetStateAction<string>>) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    stateSetter(target.value);
  };
