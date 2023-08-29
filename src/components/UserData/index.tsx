import React, { ChangeEventHandler } from "react";
import { Button } from "../Button";

export interface UserData {
  firstName: string;
  lastName: string;
  handleChangeSomeState: ChangeEventHandler<HTMLInputElement>;
}

export const UserData: React.FC<UserData> = ({
  firstName,
  lastName,
  handleChangeSomeState,
}) => {
  return (
    <div>
      <input type="text" onChange={handleChangeSomeState} />
      <Button someState={firstName} />
      {firstName} {lastName}
    </div>
  );
};
