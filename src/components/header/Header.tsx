import { Button } from "../Button/Button";
import { Username } from "../Username/Username";
import "./Header.css";

export function Header() {
  return (
    <header>
      <Button />
      <Username username="Юзер Нейм" />
    </header>
  );
}
